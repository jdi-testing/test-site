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
      link: RoutingUrls.Badges,
    },
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
    },
    {
      name: 'Autocomplete',
      link: RoutingUrls.Autocompletes,
    },
    {
      name: 'Checkbox',
      link: RoutingUrls.Checkbox,
    },
    {
      name: 'Datepicker',
      link: RoutingUrls.Datepicker,
    },
    {
      name: 'Form Fields',
      link: RoutingUrls.FormField,
    },
    {
      name: 'Inputs',
      link: RoutingUrls.Input,
    },
    {
      name: 'Radio Buttons',
      link: RoutingUrls.RadioButton,
    },
    {
      name: 'Select',
      link: RoutingUrls.Select,
    },
    {
      name: 'Slide Toggle',
      link: RoutingUrls.SlideToggle,
    },
    {
      name: 'Slider',
      link: RoutingUrls.Slider,
    },
    {
      name: 'Card',
      link: RoutingUrls.Card,
    },
    {
      name: 'Divider',
      link: RoutingUrls.Divider,
    },
    {
      name: 'Expansion Panel',
      link: RoutingUrls.Panel,
    },
    {
      name: 'Grid List',
      link: RoutingUrls.GridList,
    },
    {
      name: 'List',
      link: RoutingUrls.List,
    },
    {
      name: 'Stepper',
      link: RoutingUrls.Stepper,
    },
    {
      name: 'Tab',
      link: RoutingUrls.Tab,
    },
    {
      name: 'Tree',
      link: RoutingUrls.Tree,
    },
    {
      name: 'Menu',
      link: RoutingUrls.Menu,
    },
    {
      name: 'Toolbar',
      link: RoutingUrls.ToolBar,
    },
    {
      name: 'Sidenav',
      link: RoutingUrls.SideNav,
    },
    {
      name: 'Bottom Sheet',
      link: RoutingUrls.BottomSheet,
    },
    {
      name: 'Dialog',
      link: RoutingUrls.Dialog,
    },
    {
      name: 'SnackBar',
      link: RoutingUrls.SnackBar,
    },
    {
      name: 'Tooltip',
      link: RoutingUrls.Tooltip,
    },
  ];
}