import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { GlobalsService} from '../../teleprompter/globals.service';
import { RecorderService } from 'src/app/teleprompter/recorder.service';
@Component({
  selector: 'app-vcv-video-edit',
  templateUrl: './vcv-video-edit.component.html',
  styleUrls: ['./vcv-video-edit.component.scss']
})
export class VcvVideoEditComponent implements OnInit {
  // @ViewChild('video') video: ElementRef;
  state_list:any[];

  captures: any[];
  selectedImageUrl: String;

  constructor(private _global:GlobalsService) { }

  ngOnInit() {
    console.log(RecorderService.recordedVideoSourceBuffer)
    console.log(RecorderService.toUrl);

    this.state_list=this._global.state_list;
    // let v = this.video.nativeElement
    // v.src = RecorderService.toUrl;
    // v.Controls = true
    // v.play()
    
    this.captures = RecorderService.capturedImages
  }

  setImage(i:number){
    this.selectedImageUrl = this.captures[i]
  }

}
