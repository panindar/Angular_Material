import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ButtonComponent } from './button/button.component';
import { TopographyComponent } from './topography/topography.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TopographyComponent,
    ToggleComponent,
    ToolbarComponent,
    SidenavComponent,
    TabsComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
