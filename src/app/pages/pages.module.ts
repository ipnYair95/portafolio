import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { DesarrollosComponent } from './desarrollos/desarrollos.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipListPipe } from '../pipes/tooltip-list.pipe';




@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent,
    DesarrollosComponent,
    CursosComponent,
    ExperienciasComponent,
    ContactoComponent,
    WelcomeComponent,
    SkillsComponent,
    TooltipListPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatTabsModule,
    MatCardModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  exports: [
    IndexComponent,
    WelcomeComponent
  ]
})
export class PagesModule { }
