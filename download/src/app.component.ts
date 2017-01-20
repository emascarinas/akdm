import { Component } from '@angular/core';
declare var $:any;
@Component({
	selector: 'my-app',
	templateUrl: 'src/app.component.html',
	styleUrls: ['src/app.component.css']
})
export class AppComponent implements OnInit {
	constructor() {
		
	}
	ngOnInit() {
		setTimeout(() => {
			$('#myTabs a').click(function (e) {
				e.preventDefault()
				$(this).tab('show')
			})
		}, 0);
	}
}

