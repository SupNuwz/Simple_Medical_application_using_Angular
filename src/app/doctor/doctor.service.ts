import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorDto } from './DoctorDto';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  API_URL="http://localhost:51631/api/Doctors"

  constructor(private http: HttpClient) { }

  isuserExists(username:string,password:string): Observable<boolean>{
    return this.http.get<boolean>(this.API_URL+ '/'+ username + '/' + password )
  }
}
