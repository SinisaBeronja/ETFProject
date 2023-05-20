import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AllsalesComponent } from './allsales/allsales.component';
import { UploadsComponent } from './uploads/uploads.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { OblastComponent } from './oblast/oblast.component';
import { InstitutionComponent } from './institution/institution.component';
import { EditoblastComponent } from './editoblast/editoblast.component';
import { EditinstitutionComponent } from './editinstitution/editinstitution.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { LostpasswordComponent } from './lostpassword/lostpassword.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ProjectComponent } from './project/project.component';

import { PasswordResetComponent } from './password-reset/password-reset.component';

import { EdituserdataComponent } from './edituserdata/edituserdata.component';
import { ProjectstatusComponent } from './projectstatus/projectstatus.component';
import { ProjectfilesviewComponent } from './projectfilesview/projectfilesview.component';
import { EvaluationComponent } from './evaluation/evaluation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    AllusersComponent,
    AllsalesComponent,
    UploadsComponent,
    UploadFilesComponent,
    OblastComponent,
    InstitutionComponent,
    EditoblastComponent,
    EditinstitutionComponent,
    AllprojectsComponent,
    DocumentationComponent,
    LostpasswordComponent,
    EdituserComponent,
    ProjectComponent,

    PasswordResetComponent,

    EdituserdataComponent,
      ProjectstatusComponent,
      ProjectfilesviewComponent,
      EvaluationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
