import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  show = false;
  hide = true;
  show2 = false;
  constructor(public router: Router) { }

  async ngOnInit() {
    await setTimeout(() => {
      //this.router.navigateByUrl('/home')
      this.show = true;
      this.hide = false;
      this.show2 = false;
    }, 8000);
  }
  goNext() {
    this.show = false;
    this.show2 = true;
  }
  goNextHome() {
    this.router.navigateByUrl('/tabs/home')
  }

}
