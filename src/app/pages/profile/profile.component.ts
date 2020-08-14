import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import countries from 'country-list';
import { AccountModel } from '../../models/account';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  countryList: Array<string>;
  account: any;
  uid: any;
  constructor() { }

  ngOnInit() {
    this.countryList = [];
    this.user = {};
    this.uid = localStorage.getItem('token');
    console.log('uid: ', this.uid);
    firebase.database().ref('/accounts/' + this.uid).once('value').then(snapshot => {
      var value = snapshot.val();

      this.user = value;
      console.log('value: ', this.user);

    });
    var list = countries.getNames()
    list.map(value => this.countryList.push(value))
  }

  updateAccount() {
    var firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    var lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var phoneNumber = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
    var occupation = (<HTMLInputElement>document.getElementById("occupation")).value;
    var organization = (<HTMLInputElement>document.getElementById("organization")).value;
    var street1 = (<HTMLInputElement>document.getElementById("street1")).value;
    var city = (<HTMLInputElement>document.getElementById("city")).value;
    var state = (<HTMLInputElement>document.getElementById("state")).value;
    var zip = (<HTMLInputElement>document.getElementById("zip")).value;
    var country = (<HTMLInputElement>document.getElementById("country")).value;
    var website = (<HTMLInputElement>document.getElementById("website")).value;
    var facebook = (<HTMLInputElement>document.getElementById("facebook")).value;
    var linkedin = (<HTMLInputElement>document.getElementById("linkedin")).value;
    var twitter = (<HTMLInputElement>document.getElementById("twitter")).value;

    // this.account.firstName = firstName;
    // this.account.lastName = lastName;
    // this.account.fullName = firstName + ' ' + lastName;
    // this.account.email = email;
    // this.account.pheoneNumber = phoneNumber;
    // this.account.occupation = occupation;
    // this.account.organization = organization;
    // this.account.street1 = street1;
    // this.account.city = city;
    // this.account.state = state;
    // this.account.zip = zip;
    // this.account.country = country;
    // this.account.website = website;
    // this.account.facebook = facebook;
    // this.account.linkedin = linkedin;
    // this.account.twitter = twitter;
    // this.account.address = "";
    // this.account.card = "";
    // this.account.cardid = "";
    // this.account.companyLogo = "";
    // this.account.date = "";
    // this.account.userid = "";
    // this.account.htmlurl = "";
    // this.account.fax = "";
    // this.account.phoneCountryCode = "";
    // this.account.officeCountryCode = "";
    // this.account.office = "";
    // this.account.vcardurl = "";
    // this.account.userPhoto = "";
    this.account = {
      "firstName": firstName,
      "lastName": lastName,
      "fullName": firstName + ' ' + lastName,
      "email": email,
      "phoneNumber": phoneNumber,
      "occupation": occupation,
      "organization": organization,
      "street1": street1,
      "street2": "",
      "city": city,
      "state": state,
      "zip": zip,
      "country": country,
      "website": website,
      "facebook": facebook,
      "linkedin": linkedin,
      "twitter": twitter,
      "address": "",
      "card": "",
      "cardid": "",
      "companyLogo": "",
      "date": "",
      "userid": "",
      "htmlurl": "",
      "fax": "",
      "phoneCountryCode": "",
      "officeCountryCode": "",
      "office": "",
      "vcardurl": "",
      "userPhoto": "",
    };

    firebase.database().ref('/accounts/' + this.uid).set(this.account).then(snapshot => {
      var value = snapshot;
      console.log('value: ', value);

    }).catch(error => console.log(error));

    console.log(this.account);

  }

}
