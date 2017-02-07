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
	header: Header;

	constructor(private headerService: HeaderService) { }

	getHeaders(): void {
		this.headerService.getHeaders().then(headers => this.headers = headers);
	}	

	getHeader(): void {
		this.headerService.getHeader().then(header => this.header = header);
	}

	ngOnInit() {
		this.getHeaders();
		this.getHeader();
	}

}
