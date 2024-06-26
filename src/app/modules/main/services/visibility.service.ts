import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisibilityService {
  constructor() {}

  isQuickViewVisible: BehaviorSubject<boolean> = new BehaviorSubject(true);
}
