// src/app/components/subscription-list/subscription-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent implements OnInit {
  subscriptions: any[] = [];
  employerId!: number | null;

  constructor(
    private subscriptionService: SubscriptionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getEmployerId().subscribe(employerId => {
      if (employerId) {
        this.employerId = employerId;
        this.loadSubscriptions();
      }
    });
  }

  loadSubscriptions(): void {
    if (this.employerId) {
      this.subscriptionService.getSubscriptionsByEmployer(this.employerId).subscribe(subscriptions => {
        this.subscriptions = subscriptions;
      });
    }
  }
}
