import {Component} from '@angular/core';
import {RoutingUrls} from './routing-urls.enum';

interface navLink {
  name: string;
  link: string;
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  navLinks: navLink[] = [
    {
      name: 'Badges',
      link: RoutingUrls .Badges,
    },
    {
      name: 'Autocompletes',
      link: RoutingUrls.Autocompletes,
    },
    {
      name: 'Buttons',
      link: RoutingUrls.Buttons,
    },
    {
      name: 'Buttons Toggle',
      link: RoutingUrls.ButtonsToggle,
    }
  ];
}
