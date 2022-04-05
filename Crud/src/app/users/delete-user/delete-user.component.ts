import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userId:any;
  constructor(private activeRoute:ActivatedRoute,private service:AuthServiceService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data=>{
      this.userId=data.id;
    });

    if(this.userId){
      this.service.deleteUser(this.userId).subscribe(data=>{
        console.log("data sucessfully deleted");
      }),(err=>{
        console.log('data not deleted');
      })
    }


  }

}
