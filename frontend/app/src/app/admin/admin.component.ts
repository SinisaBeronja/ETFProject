import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-admin',
  	templateUrl: './admin.component.html',
  	styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements OnInit {
	
  	constructor(private router: Router) {}

  	ngOnInit(): void {}

	  allUsers(){
		this.router.navigate(["/allusers"])
	  }

	  allProjects(){
		this.router.navigate(["/allsales"])
	  }

	  search(){
		this.router.navigate(["/search"])
	  }
	  
	  allOblast(){
		this.router.navigate(["/oblast"])
	  }

	  allInstitution(){
		this.router.navigate(["/institution"])
	  }

	  allDocumentation(){
		this.router.navigate(["/field_names"])
	  }

	  logout(){
		localStorage.clear()
		this.router.navigate([""])
	  }
	  // pri odjavi prazni se local storage tako da ne moze da se koristi admin ovlascenja ako se uloguje user i obrnuto


}

