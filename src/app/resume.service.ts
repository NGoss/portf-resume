import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumeData } from './resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resumeJsonUrl = "http://foinse.io/resume/resume.json";
  constructor(private http :HttpClient) { }

  getResumeData() :Observable<ResumeData>{
    return this.http.get<ResumeData>(this.resumeJsonUrl);
  }
}
