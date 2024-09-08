import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  onSettings() {
    // Logic to open settings
    console.log('Settings clicked');
  }

  onLogin() {
    // Logic to open login
    console.log('Login clicked');
  }

  onMinimize() {
    // Logic to minimize window
    console.log('Window minimized');
  }

  onMaximize() {
    // Logic to maximize window
    console.log('Window maximized');
  }

  onClose() {
    // Logic to close window
    console.log('Window closed');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

}
