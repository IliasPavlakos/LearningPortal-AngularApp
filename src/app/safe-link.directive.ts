import {Directive, ElementRef, inject, input} from "@angular/core";
import {LogDirective} from "./log.directive";

@Directive({
  selector: 'a[appSaveLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
  queryParam = input<string>('');
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirmed = window.confirm("Do you want to leave the app?");

    if (confirmed) {
      if (this.queryParam() !== '') {
        const address = this.hostElementRef.nativeElement.href;
        this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam()
      }
      return;
    }

    event.preventDefault();
  }
}
