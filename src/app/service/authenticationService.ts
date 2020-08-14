import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'ng-dynami-social-login';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(private router: Router,
    private _http: HttpClient,
    private socialAuthService: AuthService) {
    this.initFirebaseAuth();

  }

  canActivate() {
    if (!this.isAuthenticated()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

  getTokenFromServer(apiUrl, body, options): Observable<any> {
    return this._http.post<any>(apiUrl, body, options)
  }

  signUp(apiUrl, body, options): Observable<any> {
    return this._http.post<any>(apiUrl, body, options)
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token')
    // check whether this token has been expired or not
    if (token != undefined) {
      return true;
    }
    return false;
  }

  signout(): void {
    let logType = localStorage.getItem('loginType')
    if (logType != undefined) {
      if (logType != "email") {
        this.socialAuthService.signOut()
      }
      localStorage.removeItem('loginType')
    }

    if (localStorage.getItem('token') != undefined) {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      localStorage.removeItem('_id')
    }
    this.router.navigateByUrl("/")
  }

  apple_signin() {
    // TODO 1: Sign in Firebase with credential from the Google user.
    console.log('Here: ')

    var provider = new firebase.auth.OAuthProvider('apple.com');
    provider.addScope('email');
    provider.addScope('name');
    firebase.auth().signInWithRedirect(provider);
    // Result from Redirect auth flow.
    firebase
      .auth()
      .getRedirectResult()
      .then(function (result) {
        if (result.credential) {
          // You can get the Apple OAuth Access and ID Tokens.
          var accessToken = result.credential;
          var idToken = result.credential;
          console.log('result user: ', result.credential)
        }
        // The signed-in user info.
        var user = result.user;
        console.log('result user: ', result.user)
        // window.location.href = "items.html"
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
  }

  // Initiate firebase auth.
  initFirebaseAuth() {
    // TODO 3: Initialize Firebase.
    firebase.auth().onAuthStateChanged(this.authStateObserver.bind(this));
  }

  getProfilePicUrl() {
    // TODO 4: Return the user's profile pic URL.
    return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
  }

  // Returns the signed-in user's display name.
  getUserName() {
    // TODO 5: Return the user's display name.
    return firebase.auth().currentUser.displayName;
  }

  // Returns true if a user is signed-in.
  isUserSignedIn() {
    // TODO 6: Return true if a user is signed-in.
    return !!firebase.auth().currentUser;
  }

  // Requests permissions to show notifications.
  requestNotificationsPermissions() {
    // TODO 11: Request permissions to send notifications.
  }

  authStateObserver(user) {
    if (user) { // User is signed in!
      // Get the signed-in user's profile pic and name.
      console.log('user: ', user.uid);
      localStorage.setItem('token', user.uid);
      if (localStorage.getItem('token') != null) {
        const id = localStorage.getItem('token')
        this.router.navigate(['items']);
      }

      // We save the Firebase Messaging Device token and enable notifications.
    } else { // User is signed out!
      // Hide user's profile and sign-out button.
      // this.router.navigateByUrl('/')
      console.log('Here: ', 'User is signed out!');
    }
  }

  // Adds a size to Google Profile pics URLs.
  addSizeToGoogleProfilePic(url) {
    if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
      return url + '?sz=150';
    }
    return url;
  }

  apple_signout() {
    firebase.auth().signOut();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}