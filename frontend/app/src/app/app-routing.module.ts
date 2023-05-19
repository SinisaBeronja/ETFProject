import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AllsalesComponent } from './allsales/allsales.component';
import { AllusersComponent } from './allusers/allusers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UploadsComponent } from './uploads/uploads.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { OblastComponent } from './oblast/oblast.component';
import { InstitutionComponent } from './institution/institution.component';
import { EditoblastComponent } from './editoblast/editoblast.component';
import { EditinstitutionComponent } from './editinstitution/editinstitution.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { LostpasswordComponent } from './lostpassword/lostpassword.component';
import { AdminGuard } from './Guards/admin.guard';
import { OblastGuard } from './Guards/oblast.guard';
import { UserGuard } from './Guards/user.guard';
import { InstitutionGuard } from './Guards/institution.guard';
import { AllusersGuard } from './Guards/allusers.guard';
import { ProjectComponent } from './project/project.component';

import { PasswordResetComponent } from './password-reset/password-reset.component';

import { EdituserdataComponent } from './edituserdata/edituserdata.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "admin", component: AdminComponent, canActivate: [AdminGuard]},
  {path: "user", component: UserComponent, canActivate: [UserGuard]},
  {path: "allusers", component: AllusersComponent, canActivate: [AllusersGuard]},
  {path: "allsales", component: AllsalesComponent},
  {path: "uploads", component: UploadsComponent},
  {path: "upload-files", component: UploadFilesComponent},
  {path: "oblast", component: OblastComponent, canActivate: [OblastGuard]},
  {path: "institution", component: InstitutionComponent, canActivate: [InstitutionGuard]},
  {path: "editoblast", component: EditoblastComponent},
  {path: "editinstitution", component: EditinstitutionComponent},
  {path: "documentation", component: DocumentationComponent},
  {path: "edituser", component: EdituserComponent},
  {path: "edituserdata", component: EdituserdataComponent},
  {path: "allprojects", component: AllprojectsComponent},
  {path: "lostpassword", component: LostpasswordComponent},
  {path: "project", component: ProjectComponent},
  {path: "reset", component: PasswordResetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
