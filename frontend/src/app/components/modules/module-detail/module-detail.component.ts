// src/app/components/module-detail/module-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {
  module: any;

  constructor(
    private moduleService: ModuleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const moduleId = +this.route.snapshot.paramMap.get('id')!;
    this.loadModule(moduleId);
  }

  loadModule(moduleId: number): void {
    this.moduleService.getModuleById(moduleId).subscribe(module => {
      this.module = module;
    });
  }
}
