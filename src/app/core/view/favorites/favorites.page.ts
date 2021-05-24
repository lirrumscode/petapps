import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
 public favorites:any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getFavorites()
  }

  async getFavorites(){
    this.favorites = this.apiService.getFav();
    return await this.favorites;
  }
}
