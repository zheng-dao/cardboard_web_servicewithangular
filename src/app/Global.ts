import { Injectable } from '@angular/core';

@Injectable(
    {providedIn: 'root'}
)
export class AppGlobals {
    readonly baseAppUrl: string = 'http://localhost:4200/';
    readonly baseAPIUrl: string = 'https://api.nysm.me/api/v1';    
}
