import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    navLinks = [
        {
            path: '',
            label: 'Setup',
        },
        {
            path: 'routes',
            label: 'Routes',
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
