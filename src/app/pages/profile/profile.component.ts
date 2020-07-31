import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private user: any;
  constructor() { }

  ngOnInit() {
    this.user = {};
    const uid = localStorage.getItem('token');
    console.log('uid: ', uid);
    firebase.database().ref('/accounts/' + uid).once('value').then(snapshot => {
        var value = snapshot.val();
        
        this.user = value;
        console.log('value: ', this.user);

    });
  }

  updateAccount() {
    console.log('Here: ');

  }

}
