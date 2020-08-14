import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/service/authenticationService';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {

  is_en: boolean = true;
  is_ar: boolean = false;

  @ViewChild('header1') header1: ElementRef;

  constructor(private router: Router,
    private translate: TranslateService,
    private authService: AuthenticationService) {
    translate.setDefaultLang('en');
  }
  uselanguage(s: string) {
    this.translate.use(s);
    if (s === 'en') {
      this.is_en = true;
      this.is_ar = false;
    }
    else {
      this.is_en = false;
      this.is_ar = true;
    }
  }

  ngOnInit() {
    
  }

  toggleHeaderMenu() {
    let nativeheader = this.header1.nativeElement;
    if (nativeheader.className === "headerbody") {
      nativeheader.className += " responsive";
    }
    else {
      nativeheader.className = "headerbody";
    }
  }

  signout() {
    this.authService.apple_signout();
  }
  // return value-> true: logined, false : logout
  getLogStatus() {
    if (localStorage.getItem('token') != undefined) {
      return true;
    } else {
      return false;
    }
  }

  signIn() {
    this.authService.apple_signin();
  }

  // signIn() {
  //   // TODO 1: Sign in Firebase with credential from the Google user.
  //   console.log('Here: ')

  //   var provider = new firebase.auth.OAuthProvider('apple.com');
  //   provider.addScope('email');
  //   provider.addScope('name');
  //   firebase.auth().signInWithRedirect(provider);
  //   // Result from Redirect auth flow.
  //   firebase
  //     .auth()
  //     .getRedirectResult()
  //     .then(function (result) {
  //       if (result.credential) {
  //         // You can get the Apple OAuth Access and ID Tokens.
  //         var accessToken = result.credential;
  //         var idToken = result.credential;
  //         // ...
  //       }
  //       // The signed-in user info.
  //       var user = result.user;
  //       console.log('result user: ', result.user)
  //       // window.location.href = "items.html"
  //     })
  //     .catch(function (error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // The email of the user's account used.
  //       var email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       var credential = error.credential;

  //       // ...
  //     });
  // }

  // // Initiate firebase auth.
  // initFirebaseAuth() {
  //   // TODO 3: Initialize Firebase.
  //   firebase.auth().onAuthStateChanged(this.authStateObserver.bind(this));
  // }

  // getProfilePicUrl() {
  //   // TODO 4: Return the user's profile pic URL.
  //   return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
  // }

  // // Returns the signed-in user's display name.
  // getUserName() {
  //   // TODO 5: Return the user's display name.
  //   return firebase.auth().currentUser.displayName;
  // }

  // // Returns true if a user is signed-in.
  // isUserSignedIn() {
  //   // TODO 6: Return true if a user is signed-in.
  //   return !!firebase.auth().currentUser;
  // }

  // // Requests permissions to show notifications.
  // requestNotificationsPermissions() {
  //   // TODO 11: Request permissions to send notifications.
  // }

  // authStateObserver(user) {
  //   if (user) { // User is signed in!
  //     // Get the signed-in user's profile pic and name.
  //     console.log('user: ', user.uid)
  //     localStorage.setItem("token", user.uid)
  //     // this.router.navigateByUrl('/items')

  //     // We save the Firebase Messaging Device token and enable notifications.
  //   } else { // User is signed out!
  //     // Hide user's profile and sign-out button.
  //     // this.router.navigateByUrl('/')
  //     console.log('Here: ', 'User is signed out!');
  //   }
  // }

  // // Adds a size to Google Profile pics URLs.
  // addSizeToGoogleProfilePic(url) {
  //   if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
  //     return url + '?sz=150';
  //   }
  //   return url;
  // }

}
