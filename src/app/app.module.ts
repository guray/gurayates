import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { LoginComponent } from './login/login.component';
import { RandevuComponent } from './randevu/randevu.component';
import { HastaComponent } from './hasta/hasta.component';
import { HastalarComponent } from './hastalar/hastalar.component';
import { ProductComponent } from './product/product.component';
import { AgGridModule } from 'ag-grid-angular';
import { DayPilot, DayPilotModule} from 'daypilot-pro-angular';

import { TestformComponent } from './testform/testform.component';
import { AddDoctorsComponent } from './add-doctors/add-doctors.component';
import { DoctorsService } from "./service/DoctorsService";
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { EditDoctorsComponent } from './edit-doctors/edit-doctors.component';
import { HastaServices } from './service/HastaServices';
import { EditHastaComponent } from './edit-hasta/edit-hasta.component';
import { AuthenticationService } from "./service/Authentication.service";


const routes : Routes=[
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'doctors', component: DoctorsComponent},
  {path: 'randevu', component: RandevuComponent},
  {path: 'hasta', component: HastaComponent},
  {path: 'hastalar', component: HastalarComponent},
  {path: 'product', component: ProductComponent},
  {path: 'testform', component: TestformComponent},
  {path: 'adddoctors', component: AddDoctorsComponent},
  {path: 'listdoctors', component: ListDoctorsComponent},
  {path: 'editdoctors', component: EditDoctorsComponent},
  {path: 'edithasta', component: EditHastaComponent},
];

@NgModule({
   declarations: [
      AppComponent,
      DoctorsComponent,
      LoginComponent,
      RandevuComponent,
      HastaComponent,
      HastalarComponent,
      ProductComponent,
      TestformComponent,
      AddDoctorsComponent,
      ListDoctorsComponent,
      EditDoctorsComponent,
      EditHastaComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      AgGridModule.withComponents([AppComponent]),
      DayPilotModule,
      ReactiveFormsModule
  
  ],
  providers: [AuthenticationService, DoctorsService, HastaServices],
  bootstrap: [AppComponent]
})
export class AppModule { }