import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn: "root"
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[]= [
        new FaceSnap(
            'Archibald',
            'Mon meilleur ami depuis tout petit !',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            0
        ),
        new FaceSnap(
            'Flowers',
            'Smells nice',
            'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
            new Date(),
            170
        ).withLocation("Dans les champs")
    ];
    public getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }    
}