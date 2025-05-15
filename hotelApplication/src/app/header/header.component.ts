import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  title: string = "Header Component";
  constructor() {}
  ngOnInit(): void {

  }
}
