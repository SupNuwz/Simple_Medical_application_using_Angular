import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDto } from './DoctorDto';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
    username:string;
    password:string;

  constructor(private router:Router, private doctorService:DoctorService) { }

  ngOnInit() {
  }

  login(){
  
    this.doctorService.isuserExists(this.username,this.password)
    .subscribe((s:boolean) => 
    {
      if(s == true)
      {
       this.router.navigate(['/patient']);
      }
      else {
        alert ("Username and Password does not match.Try again")
      }
    });    
   }

}
