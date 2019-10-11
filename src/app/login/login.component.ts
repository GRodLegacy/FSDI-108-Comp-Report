import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  showLoginError = false;

  constructor( private data : DataService, private router : Router) {}

  ngOnInit() {
  }

  validateLogin() {
    console.log("Validating login...", this.email, this.password);

    // get the list of users
    var allUsers = this.data.getAllUsers();

    // validate the credentials against all users on the array
    /* 
  
    */

    var validCreds = false;
  for(var i=0; i < allUsers.length; i++) {
    var aUser = allUsers[i];

    // compare
    if(this.email == aUser.email && this.password == aUser.password) {
    console.log("Validation complete. User verified.");
    validCreds = true;
    this.showLoginError = false;
    this.router.navigate(['user/register']);
    }

  }
  
  if (!validCreds){
  console.error("Invalid credentials!");  
  this.showLoginError = true;
  }
}
}

/* 
TO FINISH:
 - create a component called "about"
 - register the component on the routing array/student
 - on the HTML of the new component put your info
 - create a new option on the menu AboutMe
 
*/
