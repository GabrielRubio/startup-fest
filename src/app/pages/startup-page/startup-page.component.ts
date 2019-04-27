import { Component, OnInit } from '@angular/core';

import startups, { StartupsService } from 'src/app/providers/startups.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-startup-page',
  templateUrl: './startup-page.component.html',
  styleUrls: ['./startup-page.component.scss']
})
export class StartupPageComponent implements OnInit {

  startup: any = {};
  
  constructor(
    public activateRoute: ActivatedRoute,
    public router: Router,
    public startupService:StartupsService
    ) {
      //chama a rota ativa
      this.activateRoute
        .params
        // se inscreve para quando for resolvida
        .subscribe(
          // recebe os parametros
          params => {
            let slugName = params['slugname'];
            // pego a startup em questao e liga com dados na view
            this.startup = this.startupService.view(slugName);
            console.log(this.startup);
          }
        )
     }

  ngOnInit() {
  }

}
