import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  providers: [AuthService, AuthGuard],
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class CoreModule { }
