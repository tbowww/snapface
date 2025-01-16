import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe, 
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})

export class SingleFaceSnapComponent implements OnInit {
  
  faceSnap!: FaceSnap;

  hasSnapped!: boolean;
  buttonTitle!: string;

  constructor(private faceSnapsService: FaceSnapsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const faceSnapId = this.activatedRoute.snapshot.params["id"];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
    this.hasSnapped = false; 
    this.buttonTitle = "Oh Snap!"; 
  }

  onSnap() {
    if (this.hasSnapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, false);
      this.hasSnapped = false;
      this.buttonTitle = "Oh Snap!";
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, true);
      this.hasSnapped = true;
      this.buttonTitle = "Unsnap";
    }
  }
}

