import {Component} from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';

@Component({
  selector: 'checkbox-disable-ripple',
  templateUrl: './checkbox-disable-ripple.component.html',
  providers: [{provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: {disabled: true}},]
})
export class CheckboxDisableRipplelComponent {}
