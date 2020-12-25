import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  constructor() { }
public fictionBooks = [];
public nonFictionBooks = [];
public games = [];
  ngOnInit(): void {
    this.setRecommendations();
  }


  setRecommendations() {
    this.fictionBooks = [
      { "name": "The Girl With All The Gifts", "author" :"M.R. Carey", "amazon": "", "imgLink": "" },
      { "name": "Scythe", "author": "Neal Shusterman", "amazon": "", "imgLink": "" },
      { "name": "We Were Liars", "author": "E. Lockhart", "amazon": "", "imgLink": "" },
      { "name": "Ready Player One", "author": "Ernest Cline", "amazon": "", "imgLink": "" },
      { "name": "They Both Die at the End", "author": "Adam Silvera", "amazon": "", "imgLink": "" },
      { "name": "The Handmaid's Tale", "author": "Margaret Atwood", "amazon": "", "imgLink": "" },
      // { "name": "", "author": "", "amazon": "", "imgLink": "" }
    ];
    this.nonFictionBooks = [
      { "name": "HTML and CSS & Javascript and Jquery", "author": "Jon Ducket", "amazon": "https://smile.amazon.com/dp/1118907442/ref=cm_sw_r_tw_dp_x_eys5FbMVK0M74", "imgLink": "https://images-na.ssl-images-amazon.com/images/I/41T53nRtyoL._SX258_BO1,204,203,200_.jpg" },
      { "name": "Let's Pretend This Never Happened", "author": "Jenny Lawson", "amazon": "", "imgLink": "" },
      { "name": "Furiously Happy", "author": "Jenny Lawson", "amazon": "", "imgLink": "" },
      // { "id": 3, "name": "", "author": "", "amazon": "", "imgLink": "" },
      // { "id": 4, "name": "", "author": "", "amazon": "", "imgLink": "" },
    ]
    this.games = [
      {"name": "Bioshock", "steam":"", "img": ""},
      {"name": "What Remains of Edith Finch", "steam":"", "img": ""},
      {"name": "Untitled Goose Game", "steam":"", "img": ""},
      {"name": "Tell Me Why", "steam":"", "img": ""},
      {"name": "Portal", "steam":"", "img": ""},
      {"name": "Cradle", "steam":"", "img": ""},
      {"name": "Life is Strange", "steam":"", "img": ""},
      {"name": "Undertale", "steam":"", "img": ""},
      {"name": "Layers of Fear", "steam":"", "img": ""},
      // {"name": "", "steam":"", "img": ""},
      // {"name": "", "steam":"", "img": ""},
    ]
  }
}
