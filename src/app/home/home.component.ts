import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';

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

  constructor(private electron: ElectronService) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  onClose() {
    // Logic to close window
    console.log('Window closed');
    this.electron.window.close();
  }

}
