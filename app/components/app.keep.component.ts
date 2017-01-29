import { Component,OnInit } from '@angular/core';
import { AutService } from '../services/app.auth.service';

@Component({
  templateUrl: `templates/keep-template.html`
})

// Component classcls
export class KeepComponent  implements OnInit{
  constructor(private user:AutService){

  }
  ngOnInit(){
    
  }

}