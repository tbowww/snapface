import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  hasSnapped!: boolean;
  buttonTitle!: string;


  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.hasSnapped = false; 
    this.buttonTitle = "Oh Snap!"; 
  }

  onSnap() {
    if (this.hasSnapped) {
      this.faceSnap.unSnap();
      this.hasSnapped = false;
      this.buttonTitle = "Oh Snap!";
    }
    else {
      this.faceSnap.snap();
      this.hasSnapped = true;
      this.buttonTitle = "Unsnap";
    }
  }
}
