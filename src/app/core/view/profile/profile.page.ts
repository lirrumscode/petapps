import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  formBuilder = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  public data = [];
  public show: boolean = true;
  public hide: boolean = false;
  constructor(private toastController: ToastController) { }

  ngOnInit() { }
  async getData() {
    try {
      const name = await this.formBuilder.get('name').value;
      const lastname = await this.formBuilder.get('lastname').value;
      const email = await this.formBuilder.get('email').value;
      await this.data.push({ name: name, lastname: lastname, email: email });
      if (this.data) {
        await this.message('the data was save!');
        this.show = false;
        this.hide = true;
        return await this.data;
      } else {
        await this.message("the data no wasn't save!");
      }
    } catch (error) {
      console.error(error);
    }
  }
  async message(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      mode: 'ios',
    });
    toast.present();
  }
}
