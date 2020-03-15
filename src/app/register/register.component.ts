import { Component, OnInit, Input } from '@angular/core';
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
  
    @Input() registerData = {
        first_name: " ", last_name: " ", phone_no: " ", email: " ", password: " " 
    }

  constructor(private userService: UsersService) { }
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

    registerUser()
    {
      this.userService.registerUser(this.registerData).subscribe( data =>
        console.log(this.registerData));
        console.error;
    }

}