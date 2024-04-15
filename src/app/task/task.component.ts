import { TaskservService } from './../serv/taskserv.service';
import { Task } from './../task';

import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
day: any;
text: any;
reminder:any;
shw = false;
val="show";


   task:Task[] = [];
   constructor(private taskserv: TaskservService){


      this.taskserv.getasks().subscribe((task)=>(
        this.task = task
      ));

   }
   add(){
      this.shw= !this.shw;
      if(this.shw){
        this.val="hide";
      }
      else{
        this.val ="show";
      }
   }
   addTask(){
    if(this.text){
      const tsk = {
        text: this.text,
        day:this.day,
        reminder:this.reminder
      }
      this.taskserv.addTask(tsk).subscribe((tsk)=>(
        this.task.push(tsk)
      ));
      this.text ='';
      this.day='';
      this.reminder=false;
    }
  }
   dele(tsk:Task){
    this.taskserv.del(tsk).subscribe(()=>(
      this.task = this.task.filter((t) => t.id != tsk.id)
    ));
   }
   togg(tsk:Task) {
    tsk.reminder = !tsk.reminder;
    this.taskserv.upd(tsk).subscribe();

  }
}


