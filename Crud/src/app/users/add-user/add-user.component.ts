import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm:FormGroup=new FormGroup({});
  constructor( private formBuilder:FormBuilder,private service :AuthServiceService,private _snackBar:MatSnackBarModule) { }

  ngOnInit(): void {
    this.addUserForm= this.formBuilder.group({
      'username':new FormControl('',[Validators.required,Validators.minLength(5)]),    
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phone':new FormControl('',[Validators.required,Validators.maxLength(10)])

    })
  }
  createUser(){
    this.service.addUser(this.addUserForm.value).subscribe(data => {
      //this._snackBar.open("user created sucessfully");
    console.log("sucessfully created");
     
    }),(err =>{
      //this._snackBar.open("not created");
      console.log(err);
     
    })
    
    
  }
}
