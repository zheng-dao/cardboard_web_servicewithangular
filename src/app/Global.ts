import { Injectable } from '@angular/core';

@Injectable(
    {providedIn: 'root'}
)
export class AppGlobals {
    readonly baseAppUrl: string = 'http://localhost:4200/';
    readonly baseAPIUrl: string = 'https://api.nysm.me/api/v1';   

    // readonly GOOGLE_CLIENT_ID:string = "285836376834-ef97ooolnod6dj1ku9upafm74mpura0s.apps.googleusercontent.com"
    readonly GOOGLE_CLIENT_ID:string = "781760248301-7e4kim4hpvn11rle62h25jrukhpkmg9s.apps.googleusercontent.com"
    readonly LINKEDIN_API_KEY = "818r3reabdri08"
}
