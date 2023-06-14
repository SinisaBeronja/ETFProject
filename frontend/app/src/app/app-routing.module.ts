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
import { ProjectstatusComponent } from './projectstatus/projectstatus.component';
import { ProjectfilesviewComponent } from './projectfilesview/projectfilesview.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AllprojectsGuard } from './Guards/allprojects.guard';
import { AllsalesGuard } from './Guards/allsales.guard';
import { EditoblastGuard } from './Guards/editoblast.guard';
import { EditinstitutionGuard } from './Guards/editinstitution.guard';
import { EdituserGuard } from './Guards/edituser.guard';
import { EdituserdataGuard } from './Guards/edituserdata.guard';
import { EvaluationGuard } from './Guards/evaluation.guard';
import { UploadsGuard } from './Guards/uploads.guard';
import { UploadFilesGuard } from './Guards/upload-files.guard';
import { LostpasswordGuard } from './Guards/lostpassword.guard';
import { ProjectGuard } from './Guards/project.guard';
import { ProjectstatusGuard } from './Guards/projectstatus.guard';
import { SearchComponent } from './search/search.component';
import { SearchGuard } from './Guards/search.guard';
import { FieldNamesComponent } from './field-names/field-names.component';
import { EditfieldNamesComponent } from './editfield-names/editfield-names.component';
import { PoljaComponent } from './polja/polja.component';
import { EditpoljeComponent } from './editpolje/editpolje.component';
import { FieldNamesGuard } from './Guards/field-names.guard';
import { PoljaGuard } from './Guards/polja.guard';
import { EditpoljeGuard } from './Guards/editpolje.guard';
import { EditprojectComponent } from './editproject/editproject.component';
import { ProjektiComponent } from './projekti/projekti.component';
import { ProjekatupdateComponent } from './projekatupdate/projekatupdate.component';
import { EditprojectGuard } from './Guards/editproject.guard';
import { ProjectfilesviewGuard } from './Guards/projectfilesview.guard';


const routes: Routes = [
  {path: "", redirectTo: '/login', pathMatch:"full"},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "admin", component: AdminComponent, canActivate: [AdminGuard]},
  {path: "user", component: UserComponent, canActivate: [UserGuard]},
  {path: "allusers", component: AllusersComponent, canActivate: [AllusersGuard]},
  {path: "allsales", component: AllsalesComponent, canActivate: [AllsalesGuard]},
  {path: "uploads", component: UploadsComponent, canActivate: [UploadsGuard]},
  {path: "upload-files", component: UploadFilesComponent, canActivate: [UploadFilesGuard]},
  {path: "oblast", component: OblastComponent, canActivate: [OblastGuard]},
  {path: "institution", component: InstitutionComponent, canActivate: [InstitutionGuard]},
  {path: "editoblast", component: EditoblastComponent, canActivate: [EditoblastGuard]},
  {path: "editinstitution", component: EditinstitutionComponent, canActivate: [EditinstitutionGuard]},
  {path: "documentation", component: DocumentationComponent},
  {path: "edituser", component: EdituserComponent, canActivate: [EdituserGuard]},
  {path: "edituserdata", component: EdituserdataComponent, canActivate: [EdituserdataGuard]},
  {path: "allprojects", component: AllprojectsComponent, canActivate: [AllprojectsGuard]},
  {path: "lostpassword", component: LostpasswordComponent},
  {path: "project", component: ProjectComponent, canActivate: [ProjectGuard]},
  {path: "reset", component: PasswordResetComponent},
  {path: "projectstatus", component: ProjectstatusComponent, canActivate: [ProjectstatusGuard]},
  {path: "projectfilesview", component: ProjectfilesviewComponent, canActivate: [ProjectfilesviewGuard]},
  {path: "evaluation", component: EvaluationComponent, canActivate: [EvaluationGuard]},
  {path: "search", component: SearchComponent, canActivate: [SearchGuard]},
  {path: "field_names", component: FieldNamesComponent, canActivate: [FieldNamesGuard]},
  {path: "polja", component: PoljaComponent, canActivate: [PoljaGuard]},
  {path: "editpolje", component: EditpoljeComponent, canActivate: [EditpoljeGuard]},
  {path: "editproject", component: EditprojectComponent, canActivate: [EditprojectGuard]},
  {path: "projekti", component: ProjektiComponent},  // ne koristi se
  {path: "projekatupdate", component: ProjekatupdateComponent} // ne koristi se
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
