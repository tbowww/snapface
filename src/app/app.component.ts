import { Component, OnInit } from '@angular/core';
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [FaceSnapListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
