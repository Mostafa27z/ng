
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tex } from '../valid';
import { take,map } from 'rxjs/operators';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, interval } from 'rxjs';

import { TaskservService } from '../serv/taskserv.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor (private http:HttpClient , private Taserv :TaskservService){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   let  d:object={
day:"h123456789jk",
id:4,
text:"klj",
z : "sdsd"
 }
    // this.http.post('http://localhost:3000/task', JSON.stringify(d),{ headers: headers }).subscribe(a=>{
    //   console.log(a);
    // });
    // this.http.put('http://localhost:3000/task/4', JSON.stringify(d),{ headers: headers }).subscribe(a=>{
    //   console.log(a);
    // });
    Taserv.getasks().subscribe(a=>{
      console.log({
        a,
        "createdAt": "2022-11-21T20:06:23.986Z"
     });
    });
  }

  task : string = ""
  tasks : string[] = []
   print() {
    this.tasks.push(this.task)
  }
  rem(name : any){
    let z= this.tasks.indexOf(name);
    this.tasks.splice(z,1);

  }
  form = new FormGroup({
    mail : new FormControl('',[Validators.required , tex.nospace])
  });
   asd = interval(1000).pipe(take(10)).pipe(map((a)=>
   a*2
   )).subscribe(a=>{
    console.log(a);
   });
}
