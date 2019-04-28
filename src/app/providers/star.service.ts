
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'apollo-link';

export interface Star {
  userId: any;
  startupName: any;
  criterion: any;
  value: number;
}


@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private afs: AngularFirestore) { }

  // Star reviews that belong to a user
  getUserStars(userId, criterion, startupName) {
    const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId)
                                                            .where('criterion', '==', criterion)
                                                            .where('startupName', '==', startupName) );
    return starsRef.valueChanges();
  }

  // Get all stars that belog to a Criterion
  getAverageStars(criterion, startupName) {
    const starsRef = this.afs.collection('stars', ref => ref.where('criterion', '==', criterion)
                                                            .where('startupName', '==', startupName) );

    return starsRef.valueChanges();
  }

  // Create or update star
  setStar(userId, startupName, criterion, value) {
    // Star document data
    const star: Star = { userId, startupName, criterion, value };

    // Custom doc ID for relationship
    const starPath = `stars/${star.userId}_${star.startupName}_${star.criterion}`;

    // Set the data, return the promise
    return this.afs.doc(starPath).set(star);
  }

}