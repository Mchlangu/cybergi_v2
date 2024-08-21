import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ValidationService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private validationService: ValidationService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, this.validationService.emailValidator]],
      password: ['', [Validators.required, this.validationService.passwordStrengthValidator]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.validationService.matchPasswordValidator
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe({
        next: (response: any) => {
          console.log('Signed up successfully!', response);
          this.authService.handleAuthenticationResponse(response);
        },
        error: (error: any) => console.error('Sign-up failed', error)
      });
    }
  }
  
}
