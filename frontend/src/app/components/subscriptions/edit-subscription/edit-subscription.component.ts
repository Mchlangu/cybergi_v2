import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-edit-subscription',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.scss']
})
export class EditSubscriptionComponent implements OnInit {
  subscriptionForm: FormGroup;
  subscriptionId!: number;

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subscriptionForm = this.fb.group({
      moduleId: ['', Validators.required], // Module that is being subscribed to
    });
  }

  ngOnInit(): void {
    this.subscriptionId = +this.route.snapshot.paramMap.get('id')!;
    this.loadSubscription();
  }

  loadSubscription(): void {
    this.subscriptionService.getSubscriptionById(this.subscriptionId).subscribe(subscription => {
      this.subscriptionForm.patchValue(subscription);
    });
  }

  onSubmit(): void {
    if (this.subscriptionForm.valid) {
      this.subscriptionService.updateSubscription(this.subscriptionId, this.subscriptionForm.value).subscribe(() => {
        this.router.navigate(['/subscription-list']);
      });
    }
  }
}
