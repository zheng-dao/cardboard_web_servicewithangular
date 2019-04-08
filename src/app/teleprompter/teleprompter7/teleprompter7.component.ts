import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GlobalsService } from '../globals.service';
import { Router } from '@angular/router';
import { RecorderService } from '../recorder.service';
import * as RecordRTC from 'recordrtc'
import adapter from 'webrtc-adapter';



@Component({
  selector: 'app-teleprompter7',
  templateUrl: './teleprompter7.component.html',
  styleUrls: ['./teleprompter7.component.scss']
})
export class Teleprompter7Component implements OnInit {

  state_list: any[];
  loading_time:number = 12;
  recordRTC:any;
  recording_start: Boolean = false;


  @ViewChild('video') video: ElementRef;

  constructor(private _global: GlobalsService,
    private router: Router,
    private recordService: RecorderService) { }


  onNextNavigation() {
    this.router.navigateByUrl('/VCVMake/VCVVideoEdit');
  }

  ngOnInit() {
    this.state_list = this._global.state_list; 
  }

  ngAfterViewInit(){
     //set the initial state of the video   
     this.video.nativeElement.muted = false;
     this.video.nativeElement.controls = true;

     // start Recording
     let mediaContstraints = {
        audio: true, video: true
     };
     navigator.mediaDevices.getUserMedia(mediaContstraints)
     .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

   // this func returns a MediaStream Object
  async successCallback(stream:MediaStream){
    var option = {
      mimeType: 'video/webm',
      audioBitsPerSecond : 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000,
      type:'video'
    };

    this.recordRTC = RecordRTC(stream, option);  // this is media recorder    
    this.video.nativeElement.srcObject = stream;   
    this.recordRTC.setRecordingDuration(this.loading_time*1000).onRecordingStopped(this.onStoppedCallback.bind(this));

    this.recordRTC.startRecording();
  
  }
  errorCallback(errer){
    console.log(errer)
    alert("Please connect camera to your computer!")    
  }

  onStoppedCallback(){

    this.video.nativeElement.muted = true
     console.log("recording stopped!")
     
     console.log(this.recordRTC.getBlob());
     console.log(this.recordRTC.toURL());
  }

  onStartRecording(){
    this.recording_start = true
  }
}
