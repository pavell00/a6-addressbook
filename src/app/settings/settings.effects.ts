import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LocalStorageService, AnimationsService } from '../core';

import {
  SETTINGS_KEY,
  SettingsActionTypes,
  ActionSettingsPersist
} from './settings.reducer';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private animationsService: AnimationsService
  ) {}

  @Effect({ dispatch: false })
  persistSettings(): Observable<Action> {
    return this.actions$.ofType(SettingsActionTypes.PERSIST).pipe(
      tap((action: ActionSettingsPersist) => {
        const { settings } = action.payload;
        const { pageAnimations, elementsAnimations } = settings;
        this.localStorageService.setItem(SETTINGS_KEY, settings);
        this.animationsService.updateRouteAnimationType(
          pageAnimations,
          elementsAnimations
        );
      })
    );
  }
}
