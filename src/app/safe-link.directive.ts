import {Directive} from "@angular/core";

@Directive({
  selector: 'a[appSaveLink]',
  standalone: true,

})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective');
  }
}
