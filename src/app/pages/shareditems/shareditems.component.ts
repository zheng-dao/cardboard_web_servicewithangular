import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import countries from 'country-list';


@Component({
  selector: 'app-shareditems',
  templateUrl: './shareditems.component.html',
  styleUrls: ['./shareditems.component.scss']
})
export class ShareditemsComponent implements OnInit {

  private user: any;
  private cards: any;
  private uid: any;
  private countryList: Array<string>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.uid = this.route.snapshot.paramMap.get('id');
    this.countryList = [];
    this.user = {};
    this.cards = [];
    var list = countries.getNames()
    list.map(value => this.countryList.push(value))
    console.log('uid: ', this.uid);
    firebase.database().ref('/accounts/' + this.uid).once('value').then(snapshot => {
      var value = snapshot.val();

      this.user = value;
      console.log('value: ', this.user);

    });
    firebase.database().ref('/users/' + this.uid).once('value').then(snapshot => {
      var value = snapshot.val()

      console.log('value: ', value);
      if (value != null) {
        this.cards = Object.keys(value).map(key => [key, value[key]]);
        console.log('cards: ', this.cards)
      } else {

      }

    });
  }

  delete_card(card_id: any) {
    console.log('card_id', card_id);
    if (confirm('Are you really want to delete the card?')) {
      firebase.database().ref('users/' + this.uid + '/' + card_id).remove().then(() => {
        alert('Your card has been deleted successfully.');
        window.location.reload();
      });
    }
  }

  submitContactInfo() {

  }

}
