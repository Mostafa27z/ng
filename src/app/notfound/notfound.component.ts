import { ServService } from './../ser/serv.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  constructor (private c : ServService){
    this.c;
  }

}
