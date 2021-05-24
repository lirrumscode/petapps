import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {
  public data: any;
  constructor(private apiService: ApiService, private toastController: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
  }


  goBack() { 
    this.navCtrl.back();
  }
  async showToast() {
    const toast = await this.toastController.create({
      message: '<h5>Hi, My name is Juan Jesús <br>and you can contact me at the phone number: <br>+57 34256890</h5>',
      duration: 5000,
      mode: 'ios',
    });
    toast.present();
  }
}
