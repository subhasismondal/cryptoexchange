import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,Form} from '@angular/forms';
import {BackenddataService} from '../backenddata.service';
import {newuser} from '../newuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[BackenddataService]
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  datas=[];
  constructor(private formbuilder:FormBuilder, private backendservice:BackenddataService) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      name:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
    
    })
  }

getUser(){
  return this.backendservice.getUser()
  .subscribe(user=>{
    this.datas=user;
  })
}

addUser(registerForm){
  console.log(this.registerForm.value);
  let newUser:newuser= {
    name:this.registerForm.value.name,
    username:this.registerForm.value.username,
    password:this.registerForm.value.password,
    email:this.registerForm.value.email

  }
  this.backendservice.addUser(newUser)
  .subscribe(user=>{
    console.log("Registration component called"+user);
  })

}



}
