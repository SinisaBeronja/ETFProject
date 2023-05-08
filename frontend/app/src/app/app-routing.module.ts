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
import { DocumentationComponent } from './documentation/documentation.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { LostpasswordComponent } from './lostpassword/lostpassword.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "admin", component: AdminComponent},
  {path: "user", component: UserComponent},
  {path: "allusers", component: AllusersComponent},
  {path: "allsales", component: AllsalesComponent},
  {path: "uploads", component: UploadsComponent},
  {path: "upload-files", component: UploadFilesComponent},
  {path: "oblast", component: OblastComponent},
  {path: "institution", component: InstitutionComponent},
  {path: "editoblast", component: EditoblastComponent},
  {path: "editinstitution", component: EditinstitutionComponent},
  {path: "documentation", component: DocumentationComponent},
  {path: "edituser", component: EdituserComponent},
  {path: "allprojects", component: AllprojectsComponent},
  {path: "lostpassword", component: LostpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
