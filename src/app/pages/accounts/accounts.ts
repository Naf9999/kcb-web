import { Component } from '@angular/core';
import { AccountCardService } from '../../services/account-card-service';
import { LucideAngularModule, Plus } from 'lucide-angular';

@Component({
  selector: 'app-accounts',
  imports: [LucideAngularModule],
  templateUrl: './accounts.html',
  styleUrl: './accounts.css',
})
export class Accounts {
  readonly Plus = Plus;

  accounts: any[] = [];

  constructor(private accountService: AccountCardService) {
    this.accounts = this.accountService.getAccounts();
  }
}
