import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;

  ngOnInit() {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        0
      ),
      this.mySnap2 = new FaceSnap(
        'Flowers',
        'Smells nice',
        'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
        new Date(),
        170
      )
    ];

    this.faceSnaps[2].setLocation("In the fields");
  }
}
