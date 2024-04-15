import { Task } from './../task';
import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class TaskservService {
  private url = "http://localhost:3000/task";
   private httpOptions ={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  constructor(private http:HttpClient) { }
    getasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.url);
  }
  del(tsk: Task):Observable<Task>{
    const d= this.url + `/${tsk.id}`;
    return this.http.delete<Task>(d);
  }
  upd(task:Task):Observable<Task>{
    const up = this.url + "/"+ task.id;
    return this.http.put<Task>(up, task ,this.httpOptions);
  }
  addTask(tsk:Task):Observable<Task>{
    return this.http.post<Task>(this.url,tsk,this.httpOptions);
  }
}
