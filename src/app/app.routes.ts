import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./combi-checker/combi-checker.component').then(m => m.CombiCheckerComponent)
  },
  {
    path: 'resume',
    loadComponent: () => import('./modern-summary/modern-summary.component').then(m => m.ModernSummaryComponent)
  }
];
