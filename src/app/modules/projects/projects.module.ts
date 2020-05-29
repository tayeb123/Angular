import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import {SharedModule} from '../../shared/shared.module';
import {MatIconModule, MatListModule} from '@angular/material';


@NgModule({
  declarations: [ProjectsComponent, AddProjectsComponent, ListProjectsComponent, ViewProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MatListModule,
    MatIconModule
  ]
})
export class ProjectsModule { }
