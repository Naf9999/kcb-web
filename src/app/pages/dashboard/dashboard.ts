import { Component } from '@angular/core';
import { LucideAngularModule, Wallet, ChevronRight, PiggyBank, Smartphone, Send, ReceiptText, FileSliders, UserRoundPlus, Bell, Eye } from 'lucide-angular';
import { QuickActions } from '../../quick-actions/quick-actions';
import { RouterLink, } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly Wallet = Wallet; 
  readonly Bell = Bell; 
  readonly Eye = Eye; 
  readonly ChevronRight = ChevronRight; 

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

  quickActions = [
    {
      id: 1,
      icon: Send,
      title: 'Send Money'
    },
    {
      id: 2,
      icon: ReceiptText,
      title: 'Pay Bill'
    },
    {
      id: 3,
      icon: Smartphone,
      title: 'Buy Airtime'
    },
    {
      id: 4,
      icon: FileSliders,
      title: 'Bank Statement'
    },
    {
      id: 5,
      icon: UserRoundPlus,
      title: 'Open Account'
    },
    {
      id: 6,
      icon: Wallet,
      title: 'Apply Loan'
    }
  ]

  hour = new Date().getHours();
}
