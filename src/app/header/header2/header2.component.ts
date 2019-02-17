import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../../httpService/message.service'


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
  @ViewChild('message_modal') messageModal:ElementRef;

  /// notification control
  allNotifications: any[];
  sliceNotifications: any[];
  is_notification_modal_show: boolean = false;
  @ViewChild('notification_modal') notificationModal:ElementRef;

  // event listener register
  @HostListener('document:click', ['$event'])
  clickout(event) {        //My custom callback func for document:click handle 
    if(!this.messageModal.nativeElement.contains(event.target))
    this.hideMessageModal();
    if(!this.notificationModal.nativeElement.contains(event.target))
    this.hideNotificationModal();
  }

  constructor(private httpService: MessageService,
               private eRef: ElementRef) { }
  ngOnInit() {
    this.getMessages();
    this.getNotifications();
  }


  showSubMenu() {
    this.is_sub_menu_show = true;
    this.bgColor = "#3771FF";
  }
  hideSubMenu(event) {
    if (event.toElement.id == "sub_menu") {
    }
    else {
      this.is_sub_menu_show = false;
      this.bgColor = "";
    }
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
    this.is_message_modal_show = true;
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
    this.is_notification_modal_show = true;
  }
  hideNotificationModal() {
    this.is_notification_modal_show = false;
  }
}
