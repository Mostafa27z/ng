import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(num : Number) {
    console.log("serv");
   }
}
