import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-td-assignment';

  @ViewChild('form') myForm

  onSubmit(){
    console.log(this.myForm)
  }
}
