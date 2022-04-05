import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [ListUserComponent, AddUserComponent, EditUserComponent, DeleteUserComponent, ViewUserComponent],
  imports: [
    CommonModule,
    RouterModule, 
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports:[
    ListUserComponent,
     AddUserComponent, 
     EditUserComponent, 
     DeleteUserComponent, 
     ViewUserComponent,
    
],
// providers:[
//   {provide:MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{duration:2500}}
// ]
})
export class UsersModule { }
