import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuleService } from 'src/app/services/module.service';


@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.scss']
})
export class EditModuleComponent implements OnInit {
  moduleForm: FormGroup;
  moduleId!: number;

  constructor(
    private fb: FormBuilder,
    private moduleService: ModuleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.moduleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      featured: [false]
    });
  }

  ngOnInit(): void {
    this.moduleId = +this.route.snapshot.paramMap.get('id')!;
    this.loadModule();
  }

  loadModule(): void {
    this.moduleService.getModuleById(this.moduleId).subscribe(module => {
      this.moduleForm.patchValue(module);
    });
  }

  onSubmit(): void {
    if (this.moduleForm.valid) {
      this.moduleService.updateModule(this.moduleId, this.moduleForm.value).subscribe(() => {
        this.router.navigate(['/module-list']);
      });
    }
  }
}
