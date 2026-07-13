import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Accounts } from './pages/accounts/accounts';
import { AppLayout } from './app-layout/app-layout';

export const routes: Routes = [
  // 1. Root redirect (Forces empty URL to go straight to login)
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 2. Auth routes (No layout)
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // 3. Authenticated routes (Wrapped inside AppLayout)
  {
    path: '',
    component: AppLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'accounts', component: Accounts },
    ],
  },

  // 4. Fallback Catch-All (Wildcard)
  // Options A: Redirect to login
  { path: '**', redirectTo: 'login' }
  
  // Option B: Show a 404 page component instead
  // { path: '**', component: NotFoundComponent }
];
