import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, House, User, Bell, Mail, Menu } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, DatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly House = House;
  readonly Menu = Menu;
  readonly User = User;
  readonly Bell = Bell;
  readonly Mail = Mail;

  currentDate = new Date();
}
