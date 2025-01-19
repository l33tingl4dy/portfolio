import { Component, OnInit } from '@angular/core';
export interface IProjectInfo {
  name: string,
  dates: string,
  tools: string,
  img: string,
  details: string
}

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    standalone: false
})

export class ResumeComponent implements OnInit {
  public projects: IProjectInfo[] = [{
    name: '',
    dates: '',
    tools: '',
    img: '',
    details: ''
  }, {
    name: '',
    dates: '',
    tools: '',
    img: '',
    details: ''
  }]
  constructor() { }

  ngOnInit(): void {
  }
  setProjects() {
  }
}
