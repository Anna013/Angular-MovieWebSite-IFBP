import { Component, OnInit } from '@angular/core';
import { CheckClass } from 'src/app/model/CheckClass';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public check:CheckClass) { }

  ngOnInit(): void {
  }



}
