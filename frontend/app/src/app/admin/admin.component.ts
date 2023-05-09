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
	  allOblast(){
		this.router.navigate(["/oblast"])
	  }

	  allInstitution(){
		this.router.navigate(["/institution"])
	  }

	  allDocumentation(){
		this.router.navigate(["/documentation"])
	  }

	  goBack(){
		this.router.navigate([""])
	}

}

