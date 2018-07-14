import { Component, NgZone } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'seia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  opened = true;
  useDarkTheme = false;

  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );

  constructor(private zone: NgZone) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => (this.mediaMatcher = mql))
    );
  }

  isSmallScreen(): boolean {
    return this.mediaMatcher.matches;
  }

  toggleDarkTheme(): void {
    this.useDarkTheme = !this.useDarkTheme;
  }
}
