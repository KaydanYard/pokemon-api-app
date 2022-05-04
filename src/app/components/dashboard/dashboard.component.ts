import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  myArray: any[] = []

  constructor(
    public authenticationService: AuthenticationService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore
      .collection(`users/${this.authenticationService.userData.uid}/favorites`)
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.myArray.push(doc.data());
        });
      });
  }
}