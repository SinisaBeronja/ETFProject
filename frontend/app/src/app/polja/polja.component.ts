import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polja',
  templateUrl: './polja.component.html',
  styleUrls: ['./polja.component.css']
})
export class PoljaComponent implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }








  goBack(){
    this.router.navigate(["admin"])
  }

}
