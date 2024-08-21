import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  roles: string[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserRoles().subscribe(roles => {
      this.roles = roles;
      console.log('Roles in AdminDashboardComponent:', this.roles);  // Log roles to confirm
    });
  }

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }
}