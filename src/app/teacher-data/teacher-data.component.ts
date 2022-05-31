import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeacherModel } from './teacher.model';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-teacher-data',
  templateUrl: './teacher-data.component.html',
  styleUrls: ['./teacher-data.component.css']
})
export class TeacherDataComponent implements OnInit {

  formValue!: FormGroup; 
  teacherobj:TeacherModel= new TeacherModel;
  
  // teacherValue!: FormGroup; 

  allteacher: any;

  btnUpdateShow:boolean = false;

  btnSaveShow:boolean = true;
  constructor(private formBuilder:FormBuilder , private api:ApiService  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id:[''],
      firstName: [''],
      lastName: [''],
      age: [''],
      email: [''],
      class: [''],
      // students: ['']
    })
    this.AllTeacher();
  }

AddTeacher(){
  this.teacherobj.id = this.formValue.value.id;
  this.teacherobj.firstName = this.formValue.value.firstName;
  this.teacherobj.lastName = this.formValue.value.lastName;
  this.teacherobj.age = this.formValue.value.age;  
  this.teacherobj.email = this.formValue.value.email;  
  this.teacherobj.class = this.formValue.value.class;

  this.api.postTeacher(this.teacherobj).subscribe({
    next: (v) => {console.log(v)},
  error: (e) => {
    alert("Error")
    console.log(e)},
  complete: () => {
    console.log('complete')
    alert("Data Saved Successfully")
    this.AllTeacher();
    this.formValue.reset();
  } })

}

AllTeacher(){
  this.api.getTeacher().subscribe(res => {
    this.allteacher = res;
  })
}



EditTeacher(data:any){
  this.formValue.controls['id'].setValue(data.id);
  this.formValue.controls['firstName'].setValue(data.firstName);  
  this.formValue.controls['lastName'].setValue(data.lastName);
  this.formValue.controls['age'].setValue(data.age);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['class'].setValue(data.class);
 
  this.teacherobj.id = data.id;
  this.UpdateShowBtn();
}

UpdateTeacher(){
  this.teacherobj.id = this.formValue.value.id;
  this.teacherobj.firstName = this.formValue.value.firstName;
  this.teacherobj.lastName = this.formValue.value.lastName;
  this.teacherobj.age = this.formValue.value.age;  
  this.teacherobj.email = this.formValue.value.email;  
  this.teacherobj.class = this.formValue.value.class;
  this.api.putTeacher(this.teacherobj,this.teacherobj.id).subscribe(res => {
    alert("Data Updated Successfully");
    this.AllTeacher();
    this.SaveShowBtn();
  })


}


DeleteTeacher(data:any){
  this.api.deleteTeacher(data.id).subscribe(res => {
    alert("Record Deleted Successfully");
    this.AllTeacher();
  })

}

UpdateShowBtn()
{
  this.btnUpdateShow = true;
  this.btnSaveShow = false;
}
SaveShowBtn()
{
  this.btnUpdateShow = false;
  this.btnSaveShow = true;
}



}

