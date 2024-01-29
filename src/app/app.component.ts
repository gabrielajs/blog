import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./component/menu-bar/menu-bar.component";
import { BigCardComponent } from './component/big-card/big-card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BigCardComponent]
})
export class AppComponent {
  title = 'blog';
}
