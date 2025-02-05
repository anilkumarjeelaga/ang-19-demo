import { Component } from '@angular/core';
// import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent, courseDetails } from './course-card/course-card.component';
import { COURSES } from '../../db-data';
import { Course } from '../../modal';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-layout',
  imports: [
    NavMenuComponent,
    FooterComponent,
    RouterOutlet,
    CourseCardComponent, CommonModule
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  allcourses = COURSES[0]
  courses  = [...COURSES]
coursesData = COURSES[0]
rxjsCourse = COURSES[1]
ngrxCourse = COURSES[2]
// mycourse:courseDetails = {
//   name:'Angular',
//   duration:'3 weeks'
// }
eventHandlerEmitter(course:Course){
  console.log('event emitted-handler', course)
}
}
