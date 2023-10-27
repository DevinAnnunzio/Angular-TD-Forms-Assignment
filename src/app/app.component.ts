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

  // ngOnInIt(){
  //   this.subscription = 'Advanced'
  // }

  constructor(){
    this.subscription = 'Advanced'
  }

  onSubmit(){
    console.log(this.myForm)
  }
}
