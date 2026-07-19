import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, User } from 'lucide-angular';

@Component({
  selector: 'app-profile',
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  readonly User = User;
}
