import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth/auth.service';

@NgModule({
  providers: [AuthService, AuthGuard],
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class CoreModule { }
