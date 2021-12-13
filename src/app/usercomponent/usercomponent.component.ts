import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {
public users:any;
public curr:any;
  constructor(private http: HttpClient){
    console.log("hello");
  }

  getval(){
    this.http.get<any>('http://localhost:3000/api/users').subscribe(data => {
      console.log(data);
      this.users = data;
  })
   /** this.serv.getUsers().subscribe(data=> {this.users = data;
      console.log(data);});
      console.log(this.users);*/
      
  }
  ngOnInit(): void{
    this.getval();
  }
  onClickSubmit(result:any) { 
    
    this.curr=result; 
    this.curr.ID="" + Math.random().toString(36).substr(2, 9);
    console.log(this.curr);
    this.http.post<any>('http://localhost:3000/api/user',this.curr).subscribe(data => {
      console.log(data);
  })
    this.getval();
 }

}
