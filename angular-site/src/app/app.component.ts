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
    // {
    //   name: 'Autocompletes',
    //   link: RoutingUrls.Autocompletes,
    // },
    {
      name: 'Buttons',
      link: RoutingUrls.Buttons,
    },
    {
      name: 'Buttons Toggle',
      link: RoutingUrls.ButtonsToggle,
    },
    {
      name: 'Chips',
      link: RoutingUrls.Chips,
    },
    {
      name: 'Icons',
      link: RoutingUrls.Icons,
    },
    {
      name: 'Progress Bar',
      link: RoutingUrls.ProgressBar,
    },
    {
      name: 'Progress Spinner',
      link: RoutingUrls.ProgressSpinner,
    },
    {
      name: 'Ripple',
      link: RoutingUrls.Ripple,
    },
    {
      name: 'Paginator',
      link: RoutingUrls.Paginator,
    },
    {
      name: 'Sort Header',
      link: RoutingUrls.SortHeader,
    },
    {
      name: 'Tables',
      link: RoutingUrls.Tables,
    }
  ];
}
