import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { CreateTrackerPage } from '../create-tracker/create-tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }

  createTracker() {
    let modal = this.modalCtrl.create(CreateTrackerPage);
    modal.present();
  }

}
