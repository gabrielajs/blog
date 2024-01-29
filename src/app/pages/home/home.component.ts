import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../component/menu-title/menu-title.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuTitleComponent]
})
export class HomeComponent {

}
