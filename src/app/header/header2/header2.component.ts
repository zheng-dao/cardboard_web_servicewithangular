import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../../httpService/message.service'
import { AuthenticationService } from 'src/app/service/authenticationService';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {

  is_sub_menu_show: boolean = false;
  bgColor: string = "";
  /// message control
  allMessages: any[];
  sliceMessages: any[];
  is_message_modal_show: boolean = false;
  @ViewChild('message_modal') messageModal: ElementRef;
  @ViewChild('sub_menu') sub_menu: ElementRef;

  /// notification control
  allNotifications: any[];
  sliceNotifications: any[];
  is_notification_modal_show: boolean = false;
  @ViewChild('notification_modal') notificationModal: ElementRef;

  // event listener register
  // @HostListener('document:click', ['$event'])  
  // clickout(event) {        //My custom callback func for document:click handle 
  //   if (!this.messageModal.nativeElement.contains(event.target))
  //     this.hideMessageModal();
  //   if (!this.notificationModal.nativeElement.contains(event.target))
  //     this.hideNotificationModal();
  // }

  //navbar 
  // @ViewChild('header2') header2:ElementRef;

  constructor(private httpService: MessageService,
    private eRef: ElementRef,
    private authService: AuthenticationService,
    private router: Router) { }
  ngOnInit() {
    this.getMessages();
    this.getNotifications();

  }

  showSubMenu() {
    this.sub_menu.nativeElement.style.display = "block"
    this.bgColor = "#3771FF";
  }
  hideSubMenu() {
    this.sub_menu.nativeElement.style.display = "none"
    this.bgColor = "";
    console.log(this.is_sub_menu_show);
  }

  toggleSubMenu() {
    if (this.sub_menu.nativeElement.style.display == "block")
      this.hideSubMenu();
    else
      this.showSubMenu();
  }

  //////////////// messages  ////////////////////////
  getMessages() {
    this.httpService.getMessages().subscribe(data => {
      this.allMessages = data;
      this.sliceMessages = this.allMessages.slice(0, 3);
    });
  }
  seeAllMessages() {
    this.sliceMessages = this.allMessages.slice(0, this.allMessages.length);
  }

  showMessageModal() {

    if (document.body.clientWidth < 1350) {
      console.log("small")
      this.messageModal.nativeElement.className = "message-modal message-position-right";
    }
    else {
      console.log("large")
      this.messageModal.nativeElement.className = "message-modal message-position-left";
    }
    this.is_message_modal_show = true;
    this.is_notification_modal_show = false
  }
  hideMessageModal() {
    this.is_message_modal_show = false;
  }

  ///////////////// notifications//////////////////////
  getNotifications() {
    this.httpService.getNotifications().subscribe(data => {
      this.allNotifications = data;
      this.sliceNotifications = this.allNotifications.slice(0, 2);
    });
  }

  seeAllNotification() {
    this.sliceNotifications = this.allNotifications.slice(0, this.allNotifications.length);
  }

  showNotificationModal() {
    if (document.body.clientWidth < 1350) {
      this.notificationModal.nativeElement.className = "message-modal message-position-right";
    }
    else {
      this.notificationModal.nativeElement.className = "message-modal message-position-left";
    }
    this.is_notification_modal_show = true;
    this.is_message_modal_show = false
  }
  hideNotificationModal() {
    this.is_notification_modal_show = false;
  }


  ////////////////////menu show and hide (toggle)////////////////

  // toggleHeaderMenu() {
  //   let nativeheader = this.header2.nativeElement;
  //   if (nativeheader.className === "headerbody") {
  //     nativeheader.className += " responsive";
  //   }
  //   else {
  //     nativeheader.className = "headerbody";
  //   }
  // }

  signout() {
    // this.authService.signout()
    this.authService.apple_signout();
  }
}
