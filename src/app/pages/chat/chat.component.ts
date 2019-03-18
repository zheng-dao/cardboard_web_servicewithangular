import { Component, OnInit, ElementRef } from '@angular/core';
import { ChatService } from '../../httpService/chat.service';
import { ChatMember } from '../../models/chat';
import * as $ from 'jquery';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  // Dom elements
  infoDom: any;  // member-info container
  tabs: any;  // tab container
  //chat members
  ChatMembers: ChatMember[];
  //selected member:any
  SelectedMember: ChatMember;

  // my message list
  messages:any[]=[];

  constructor(private eRef: ElementRef,
    private httpService: ChatService) { }

  ngOnInit() {
    this.infoDom = this.eRef.nativeElement.querySelector(".user-info-container");
    this.tabs = this.eRef.nativeElement.querySelector(".tabs");
    this.getChatMembers();
    this.SelectedMember = {
      photo: "",
      name: "",
      position: "",
      email: "",
      phone: "",
      birth: "",
      gender: "",
      language: "",
      com: "",
      location: ""
    };
    
  }

  // tab selection-control
  onClickTab(target) {
    for (let i = 0; i < this.tabs.children.length; i++) {
      this.tabs.children[i].className = "tab";
    }
    target.className = "tab select";
  }

  // set selected person profile
  onDblClickSetMemberProfile(index) {
    this.SelectedMember = this.ChatMembers[index];
    $(".user-info-container").css("display", "block");
    $(".chat-members>li").each(
      function () { $(this).removeClass('member-selected'); }
    );
    $(".chat-members>li").eq(index).addClass("member-selected");
  }

  onClickSetMemberProfile(index) {
    this.SelectedMember = this.ChatMembers[index];
    $(".chat-members>li").each(
      function () { $(this).removeClass('member-selected'); }
    );
    $(".chat-members>li").eq(index).addClass("member-selected");
  }

  // hide profile panel
  onHideProfile() {
    $(".user-info-container").css("display", "none");
  }
  // enter-key press event in message-box
  onEnterKeyPressSendMessage(event){
    
    if(event.keyCode==13) {  // enter-key code
      let message_txt=$('.message-window').val();
      if(message_txt!=""){
        let current_time=new Date();        
        this.messages.push({
          content:message_txt, time:formatDate(current_time, 'h:mm a','en')         
        });
        $('.message-window').val('');
      }
    } 
  }

  getChatMembers() {
    this.httpService.getChatMembers().subscribe(data => {
      this.ChatMembers = data;
    });
  }


}
