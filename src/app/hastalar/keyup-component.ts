import { Component } from '@angular/core';
import {HastaServices} from "../service/HastaServices";
import {Hasta} from "../model/Hasta";

    @Component({
        selector: 'app-key-up4',
        template: `
          <input #box
            (keyup.enter)="update(box.value)"
            (blur)="update(box.value)">
      
          <p>{{value}}</p>
        `
      })
      // tslint:disable-next-line:class-name
      export class KeyUpComponent_v4 {
        value = '';
        
        update(value: string) { this.value = value; }
      
      }


