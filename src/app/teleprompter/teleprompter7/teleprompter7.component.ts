import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GlobalsService } from '../globals.service';
import { Router } from '@angular/router';
import { RecorderService } from '../recorder.service';
import * as RecordRTC from 'recordrtc'
import * as FileSaver from 'file-saver'
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-teleprompter7',
  templateUrl: './teleprompter7.component.html',
  styleUrls: ['./teleprompter7.component.scss']
})
export class Teleprompter7Component implements OnInit {

  state_list: any[];
  loading_time: number = 12;
  recordRTC: any;
  recording_start: Boolean = false;
  recording_state: String = "teleprompter7_no_recoding";
  control_show: String = "none";

  captureProcess:any;

  @ViewChild("canvas") canvas:ElementRef;
  @ViewChild('video') video: ElementRef;
  captures:any[];

  constructor(private _global: GlobalsService,
    private router: Router,
    private http:HttpClient) { }

  ngOnInit() {
    this.state_list = this._global.state_list;
    this.captures = [];
  }

  ngAfterViewInit() {
    //set the initial state of the video   
    this.video.nativeElement.muted = false;
    this.video.nativeElement.controls = true;

    this.InitVideofromCamera()
  }

  startRecordFromCamera() {
    console.log("start capture")
    this.recordRTC.setRecordingDuration(this.loading_time * 1000).onRecordingStopped(this.onStoppedCallback.bind(this));
    this.recordRTC.startRecording();

    //capture images
    this.captureProcess = setInterval(() => {
           var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0,640,480); 
           this.captures.push(this.canvas.nativeElement.toDataURL("image/png"))
    }, 500);
  }

  onStoppedCallback() {
    this.video.nativeElement.muted = true
    console.log("recording stopped!")
    // RecorderService.recordedVideoSourceBuffer = this.recordRTC.getBlob()
    // RecorderService.toUrl = this.recordRTC.toURL()
    RecorderService.capturedImages = this.captures
    window.clearInterval(this.captureProcess)

    // save recorded blob data into disk
   //FileSaver.saveAs(this.recordRTC.getBlob(), "MyTest.mp4")
   
   // file upload to my backend server
   let blob = this.recordRTC.getBlob()
   let formdata = new FormData();   
   formdata.append('blob', blob)

   this.http.post('http://localhost:3000/jobseeker/blob/uploadblob',formdata).subscribe(res => {
     if(res == 'ok'){
      this.router.navigateByUrl('/VCVMake/VCVVideoEdit');
     }
     else{
       console.log(res)
     }
   })

    
  }


  InitVideofromCamera() {
    // start Recording
    let mediaContstraints = {
      audio: true, video: true
    };
    navigator.mediaDevices.getUserMedia(mediaContstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }


  // this func returns a MediaStream Object
  async successCallback(stream: MediaStream) {
    var option = {
      mimeType: 'video/webm;codecs=h264',
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000,
      type: 'video'
    };

    this.recordRTC = RecordRTC(stream, option);  // this is media recorder    
    this.video.nativeElement.srcObject = stream;


    this.control_show = "inline"
    console.log("ok")
  }


  errorCallback(errer) {
    console.log(errer)
    alert("Please connect camera to your computer!")
  }

  

  onStartRecording() {
    this.recording_start = true
    this.recording_state = "teleprompter7_recording"
    this.startRecordFromCamera()
  }


}
