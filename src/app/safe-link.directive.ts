import {Directive} from "@angular/core";

@Directive({
  selector: 'a[appSaveLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirmed = window.confirm("Do you want to leave the app?");

    if (confirmed) {
      return;
    }

    event.preventDefault();
  }
}
