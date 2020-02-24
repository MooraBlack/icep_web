import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() applyData = {
  //   fname: " ", lname: " ", email: " ", pword: " ", pword2: " "
  // } 
  constructor() { }
  // private users_Service: UsersService
  ngOnInit() {
  
  }

  // postApplication()
  // {
  //   this.users_Service.PostApplication(this.applyData).subscribe(
  //     data => console.log(data));
  //     console.log(this.applyData.fname);
  //     console.log(this.applyData.lname);
  //     console.log(this.applyData.email);
  //     console.log(this.applyData.pword);
  //     console.log(this.applyData.pword2);
  // }

}