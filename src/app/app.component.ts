
import { Component } from '@angular/core'
import { RaceService } from './race.service'
import { HTTP_PROVIDERS } from '@angular/http'
import { ROUTER_DIRECTIVES } from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
