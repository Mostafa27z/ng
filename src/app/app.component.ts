import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'startapp';
  myname : string = "Mostafa Osama";
  sasa : string = "12";
   zz():void{
    alert(123);

  }
}
