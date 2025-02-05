import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COURSES } from '../../../db-data';
import { Course } from '../../../modal';
import { CommonModule } from '@angular/common';
export interface courseDetails{
  name:string;
  duration:string;
}

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() coourse!:courseDetails;
  // @Input() title!:string;
  @Input() course!:Course;
coreCourses = COURSES
@Input({required: true}) index!:number;
// @Input() cardIndex!:number;
@Output('courseSelected') courseEmitter = new EventEmitter<Course>()
ngOnInit(){
  console.log(this.coreCourses)
}
onViewCourse(){
  this.courseEmitter.emit(this.course);
  console.log('view-course')
}
cardClasses(){
  // return{
  //   'beginner': this.course.category === 'Beginner',
  //   'advanced': this.course.category === 'Advanced',
  //   'pro': this.course.category === 'Pro',

  // }
  if(this.course.category == 'Beginner')
    return ['beginnerclass', 'one', 'two']
  else if (this.course.category == 'Advanced')
    return 'advancedclass'
  else
  return 'defalut pro class'
}

cardStyles(){
return {
  'background-image': 'url('+ this.course.imgSrc + ')'
}
}

date  = new Date(2024, 0, 26);
dt =new Date()
dataArr = COURSES[0].courseName
dataArr1 = COURSES
}
