import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() title!: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

}
