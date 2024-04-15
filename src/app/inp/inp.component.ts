import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inp',
  templateUrl: './inp.component.html',
  styleUrls: ['./inp.component.css']
})
export class InpComponent {
  @Input('t') te:String = "as";
  @Output() change = new EventEmitter;
  onv(){
    this.te = '12';
    this.change.emit();
  }
  
}
