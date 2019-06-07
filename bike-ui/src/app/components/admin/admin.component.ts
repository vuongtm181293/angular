import { Component, OnInit } from '@angular/core';
import { BikeService } from "./../../services/bike.service";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
  }

  getBikes(){
    this.bikeService.getBikes
  }

}
