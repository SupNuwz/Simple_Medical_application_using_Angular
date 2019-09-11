import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import {RecordsComponent } from './records/records.component';

const routes:Routes=[
    { path:'', component:DoctorComponent},
    {path:'patient',component:PatientComponent},
    {path:'records', component:RecordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}