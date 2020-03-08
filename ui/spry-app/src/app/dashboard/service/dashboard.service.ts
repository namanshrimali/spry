import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private activeComponent: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }
  getActiveComponent(): BehaviorSubject<string> {
    return this.activeComponent;
  }
}
