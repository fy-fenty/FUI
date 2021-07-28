import { Injectable } from '@angular/core';
import TooltipModel from './tooltip.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  private popups = new Subject<TooltipModel>();
  public popups$: Observable<TooltipModel> = this.popups.asObservable();
  constructor(
  ) {
  }

  showPopup(popup: TooltipModel) {
    this.popups.next(popup);
  }
}
