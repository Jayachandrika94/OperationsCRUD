import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId:string='';
  userDetails:any;
  constructor(private service:AuthServiceService,private activated:ActivatedRoute) { }

  ngOnInit(): void {

    this.activated.params.subscribe(data => {
      this.userId=data.id;
      console.log(this.userId);
    })
  this.service.viewUsers(this.userId).subscribe(data => {
   this.userDetails=data;
    console.log(data);

  })
  }

}
