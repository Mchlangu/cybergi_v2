import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.scss']
})
export class CreateSubscriptionComponent {
  subscriptionForm: FormGroup;
  employerId!: number | null;

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
    private authService: AuthService,
    private router: Router
  ) {
    this.subscriptionForm = this.fb.group({
      moduleId: ['', Validators.required], // Module that is being subscribed to
    });

    this.authService.getEmployerId().subscribe(employerId => {
      this.employerId = employerId;
    });
  }

  onSubmit(): void {
    if (this.subscriptionForm.valid && this.employerId) {
      const subscription = {
        employerId: this.employerId,
        ...this.subscriptionForm.value
      };
      this.subscriptionService.createSubscription(subscription).subscribe(() => {
        this.router.navigate(['/subscription-list']);
      });
    }
  }
}