import { Injectable } from '@angular/core';
import { Smartphone, PiggyBank, Wallet } from 'lucide-angular';

@Injectable({
  providedIn: 'root',
})
export class AccountCardService {


  accounts = [
    {
      type: "Current",
      icon: Wallet,
      name: "KCB Current Account",
      number: "0112 3456 7890",
      balance: "145,000.00"
    },
    {
      type: "saving",
      icon: PiggyBank,
      name: "KCB Savings Account",
      number: "0098 7654 3210",
      balance: "45,000.20"
    },
    {
      type: "bussiness",
      icon: Smartphone,
      name: "KCB M-pesa Account",
      number: "254 712 345 678",
      balance: "340,000.00"
    }
    
  ];

  getAccounts() {
    return this.accounts;
  }
}
