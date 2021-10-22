import { Component, OnInit } from '@angular/core';
import { ResumeData } from '../resume';
import { ResumeService } from '../resume.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resumeData! :ResumeData;
  constructor(private resumeService :ResumeService) { }

  ngOnInit(): void {
    this.resumeService.getResumeData().subscribe(data => this.resumeData = data);
  }

}
