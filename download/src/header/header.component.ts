import { Component, OnInit } from '@angular/core';
import { Header }                from './header';
import { HeaderService }                from './header.service';

@Component({
	selector: 'app-header',
	templateUrl: 'src/header/header.component.html',
	styleUrls: ['src/header/header.component.css'],
	providers: [HeaderService]
})
export class HeaderComponent implements OnInit {

	headers: Header[];

	constructor(private headerService: HeaderService) { }

	getHeaders(): void {
		this.headerService.getHeaders().then(headers => this.headers = headers);
	}

	ngOnInit() {
		this.getHeaders();
	}

}
