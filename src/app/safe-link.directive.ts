import {Directive, input} from "@angular/core";

@Directive({
  selector: 'a[appSaveLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {

  queryParam = input<string>('');

  constructor() {
    console.log('SafeLinkDirective');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirmed = window.confirm("Do you want to leave the app?");

    if (confirmed) {
      if (this.queryParam() !== '') {
        const address = (event.target as HTMLAnchorElement).href;
        (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam()
      }
      return;
    }

    event.preventDefault();
  }
}
