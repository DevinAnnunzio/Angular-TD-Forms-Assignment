import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'forms-td-assignment';

  @ViewChild('form') myForm

  subscription: string
  subscriptionOptions = ['Basic', 'Advanced', 'Pro']
  email: string
  password:string

  userSelection = {
    email: '',
    subscription: '',
    password: ''
  }

  constructor(){
    this.subscription = 'Advanced'
  }

  onSubmit(){
    console.log(this.myForm)
    this.userSelection.email = this.myForm.value.email
    this.userSelection.subscription = this.myForm.value.subscription
    this.userSelection.password = this.myForm.value.password
    this.myForm.reset();
    this.subscription = 'Advanced'
  }
}
