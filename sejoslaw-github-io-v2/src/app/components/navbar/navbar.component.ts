import { Component, NgZone } from '@angular/core';
import { INavbarElement } from '../../shared/interfaces/inavbar-element';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'seia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  opened = true;
  useDarkTheme = false;

  navbarButtons: INavbarElement[] = [
    { routerPath: '/', icon: 'home', buttonText: 'Home' },
    { routerPath: '/myRepos', icon: 'list', buttonText: 'My Repositories' },
    {
      routerPath: '/starredRepos',
      icon: 'list',
      buttonText: 'Starred Repositories (last 100)'
    },
    { routerPath: '/about', icon: 'face', buttonText: 'About' }
  ];

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

  navbarButtonClicked(sidenav: MatSidenav) {
    if (sidenav && this.isSmallScreen()) {
      sidenav.toggle();
    }
  }
}
