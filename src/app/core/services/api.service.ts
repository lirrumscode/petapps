import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Data } from '../interface/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
  public url = { uri: 'https://dog.ceo/api/breeds/image/random/9/alt' };
  data = [];
  constructor(private http: HttpClient, private toastController: ToastController) { }

  ngOnInit() {
  }

  getCharacters(): Observable<Data[]> {
    try {
      return this.http.get<Data[]>(this.url.uri);
    } catch (error) {
      console.error(error);
    }
  }
  addFav(data: any) {
    try {
      this.data.push(data);
      if (this.data) {
        this.message("The pet was add to favorite");
      } else {
        this.message("The pet wasn't add to favorite");
      }
    } catch (error) {
      console.error(error);
    }
  }
  getFav() {
    return this.data;
  }
  async message(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      mode: "ios"
    });
    toast.present();
  }
}