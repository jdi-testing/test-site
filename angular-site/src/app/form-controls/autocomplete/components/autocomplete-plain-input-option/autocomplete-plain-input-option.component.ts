import { Component, OnInit } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'app-autocomplete-plain-input-option',
  templateUrl: './autocomplete-plain-input-option.component.html',
  styles: [`
    .example-input {
      max-width: 100%;
      width: 300px;
    }
  `]
})
export class AutocompletePlainInputOptionComponent implements OnInit {
  control = new UntypedFormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets?: Observable<string[]>;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
