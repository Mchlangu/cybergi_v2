import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuleService } from 'src/app/services/module.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent {
  moduleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private moduleService: ModuleService,
    private router: Router
  ) {
    this.moduleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      featured: [false]
    });
  }

  onSubmit(): void {
    if (this.moduleForm.valid) {
      this.moduleService.createModule(this.moduleForm.value).subscribe(() => {
        this.router.navigate(['/module-list']);
      });
    }
  }
}
