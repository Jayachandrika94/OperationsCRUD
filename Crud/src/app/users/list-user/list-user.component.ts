import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
 listUsers:any;
 constructor(private service:AuthServiceService) { }

  ngOnInit(): void {
    this.service.listUsers().subscribe(data => {
      this.listUsers = data;
    });
  }

}
