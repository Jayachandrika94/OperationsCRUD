import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId:any;
  userDetails:any;
  editUserForm:FormGroup= new FormGroup({});
  dataLoaded:boolean=false;
  constructor(private activeRoute:ActivatedRoute,private service:AuthServiceService ,private formBulider:FormBuilder) { }

  ngOnInit(): void {
    
    this.activeRoute.params.subscribe(data=>{
      this.userId=data.id;
    });
    if(this.userId!==''){
      this.service.viewUsers(this.userId).toPromise().then(data=>{
         this.userDetails=data;
         Object.assign(this.userDetails,data);
         console.log(this.userDetails);

         this.editUserForm=this.formBulider.group({
           'name':new FormControl(this.userDetails.name),
           'email':new FormControl(this.userDetails.email)
         })
          this.dataLoaded=true;
      }).catch(err=>{
        console.log(err);
      })
    }

    
  }
  updateUser(){
    console.log(this.editUserForm.value);

    this.service.updateUser(this.userId,this.editUserForm.value).subscribe(data=>{
      console.log('updated sucessfully');
    }),(err=>{
      console.log('not updated');
    })
  }

}
