// src/app/components/module-list/module-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
  modules: any[] = [];

  constructor(private moduleService: ModuleService) {}

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules(): void {
    this.moduleService.getAllModules().subscribe(modules => {
      this.modules = modules;
    });
  }
}
