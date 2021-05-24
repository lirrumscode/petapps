import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public allCharacters: any;
  public type: string;
  constructor(private apiService: ApiService, private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.getByCharacters();
    this.type = 'dogs'
    this.storage.create();
  }
  async getByCharacters() {
    try {
      this.apiService.getCharacters().subscribe(data => {
        this.allCharacters = data['message'];
        return this.allCharacters;
      })
    } catch (error) {
      console.error(error)
    }
  }
  async goFav(data: any) {
    data.selected = true;
    await this.apiService.addFav(data);
    await this.router.navigateByUrl('tabs/favorites')
  }
  goSingle(){
    this.router.navigate(['single']);  
  }
}