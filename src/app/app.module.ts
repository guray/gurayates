import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { LoginComponent } from './login/login.component';
import { RandevuComponent } from './randevu/randevu.component';
import { HastaComponent } from './hasta/hasta.component';
import { HastalarComponent } from './hastalar/hastalar.component';
import { ProductComponent } from './product/product.component';

const routes : Routes=[
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'doctors', component: DoctorsComponent},
  {path: 'randevu', component: RandevuComponent},
  {path: 'hasta', component: HastaComponent},
  {path: 'hastalar', component: HastalarComponent},
  {path: 'product', component: ProductComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    LoginComponent,
    RandevuComponent,
    HastaComponent,
    HastalarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
