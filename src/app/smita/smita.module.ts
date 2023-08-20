import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule

  ],
  exports:[
    PageComponent,
    HeaderComponent,
    ButtonComponent
  ]
})
export class SmitaModule { }
