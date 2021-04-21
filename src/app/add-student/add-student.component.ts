import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Student } from '../student';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentservice:StudentService) { }

  student : Student=new Student();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  studentsaveform=new FormGroup({
    firstName:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
    lastName:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
    gender:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    dept:new FormControl('',[Validators.required])
    
  });

  saveStudent(saveStudent){
    this.student=new Student();   
    this.student.firstName=this.StudentFirstName.value;
    this.student.lastName=this.StudentLastName.value;
    this.student.gender=this.StudentGender.value;
    this.student.dob=this.StudentDOB.value;
    this.student.dept=this.StudentDept.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    console.log(this.student);
    this.studentservice.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
  }

  get StudentFirstName(){
    return this.studentsaveform.get('firstName');
  }

  get StudentLastName(){
    return this.studentsaveform.get('lastName');
  }

  get StudentGender(){
    return this.studentsaveform.get('gender');
  }

  get StudentDOB(){
    return this.studentsaveform.get('dob');
  }

  get StudentDept(){
    return this.studentsaveform.get('dept');
  }

  addStudentForm(){
    this.submitted=false;
    this.studentsaveform.reset();
  }
}
