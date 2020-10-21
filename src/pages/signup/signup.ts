import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl:AlertController) {
  }

  signupUser(){
    let alert = this.alertCtrl.create({
      cssClass: 'signupUser',
      title: 'BEM VINDO! :)',
      message: 'Formulário enviado com êxito',
      buttons:[
        {text: 'OK'}
      ]
    });
    alert.present();
  }



}
