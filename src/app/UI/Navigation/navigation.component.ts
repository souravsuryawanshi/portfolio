import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  toggle: boolean = false;
  constructor(private _route: Router) {}
  navigateToHome() {
    this._route.navigateByUrl('');
  }

  navigateToEducation() {
    this._route.navigateByUrl('education');
  }

  navigateToProjects() {
    this._route.navigateByUrl('projects');
  }

  navigateToExperience() {
    this._route.navigateByUrl('experience');
  }

  navigateToSkills() {
    this._route.navigateByUrl('skills');
  }

  navigateToContact() {
    this._route.navigateByUrl('contact');
    this.toggle = false;
  }

  onBurgerClick() {
    this.toggle = !this.toggle;
  }
}
