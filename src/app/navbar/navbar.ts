import { DatePipe } from '@angular/common';
import { Component, output } from '@angular/core';
import { LucideAngularModule, House, User, Bell, Mail, Menu } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, DatePipe, RouterLink],
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

  menuClicked = output<void>();
}
