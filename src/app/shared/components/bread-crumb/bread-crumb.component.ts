import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent {
  constructor(
    private router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  breadcrumbItems: MenuItem[] | undefined;
  currentPage: string = '';
  home: MenuItem | undefined;

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumb();
      });

    // Initialize breadcrumb
    this.updateBreadcrumb();

    this._ActivatedRoute.url.subscribe((segments) => {
      this.currentPage = segments[segments.length - 1].path;
    });

    this.home = {
      icon: 'fa-solid fa-house-chimney',
      routerLink: '/',
    };
  }

  updateBreadcrumb() {
    const urlSegments = this.router.url.split('/').filter((segment) => segment);
    this.breadcrumbItems = urlSegments.map((segment, index) => {
      return {
        label: this.capitalize(segment),
        routerLink: '/' + urlSegments.slice(0, index + 1).join('/'),
      };
    });
  }
  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
