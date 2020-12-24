import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setBookRecommendations();
  }


  setBookRecommendations() {
    let fictionBooks = [
      { "id": 0, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 1, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 2, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 3, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 4, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 5, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 6, "name": "", "author": "", "amazon": "", "imgLink": "" }
    ];
    let nonFictionBooks = [
      { "id": 0, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 1, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 2, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 3, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 4, "name": "", "author": "", "amazon": "", "imgLink": "" },
      { "id": 5, "name": "", "author": "", "amazon": "", "imgLink": "" },
    ]
  }
}
