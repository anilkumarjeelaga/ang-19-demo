import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COURSES } from '../db-data';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  desc = COURSES[0].desc
  price:number = 12.89;
  rate:number = 0.58
  title = 'ang-19-demo';
  onKeyup(newTitle:string){
    this.title = newTitle
    // alert();
  }
  // alert(){
  //   console.log('show something')
  // }
}
