import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../component/menu-title/menu-title.component";
import { BigCardComponent } from '../../component/big-card/big-card.component';
import { SmallCardComponent } from '../../component/small-card/small-card.component';
import { MenuBarComponent } from '../../component/menu-bar/menu-bar.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent]
})
export class HomeComponent {

}
