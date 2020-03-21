import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const adminRouterConfig: Routes =[
  { path: '', component: AdminDashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
