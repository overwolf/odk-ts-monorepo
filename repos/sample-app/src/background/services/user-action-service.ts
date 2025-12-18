import { singleton } from 'tsyringe';
import { DelegateProvider } from '../../shared/interfaces/delegate-provider.interface';
import {
  IUserActionService,
  IUserActionServiceDelegate,
  kNameOfUserActionService,
} from '../../shared/interfaces/user-action-service.interface';
import { FunctionPropertyNames } from '../types';

//------------------------------------------------------------------------------
@singleton()
export class UserActionService
  implements IUserActionService, DelegateProvider<IUserActionServiceDelegate>
{
  private readonly listeners: Set<IUserActionServiceDelegate>;

  //----------------------------------------------------------------------------
  public constructor() {
    this.listeners = new Set<IUserActionServiceDelegate>();
  }

  //----------------------------------------------------------------------------
  // Private Functions
  //----------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  private triggerListenerEvent(
    eventName: FunctionPropertyNames<IUserActionServiceDelegate>
  ) {
    if (!eventName) {
      return;
    }

    for (const listener of this.listeners) {
      if (!listener[eventName]) {
        continue;
      }

      listener[eventName]();
    }
  }

  //----------------------------------------------------------------------------
  // IExposableService
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  get token(): string {
    return kNameOfUserActionService;
  }

  // ---------------------------------------------------------------------------
  // DelegateProvider
  // ---------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  addListener(listener: IUserActionServiceDelegate) {
    this.listeners.add(listener);
  }

  //----------------------------------------------------------------------------
  removeListener(listener: IUserActionServiceDelegate) {
    this.listeners.delete(listener);
  }

  //----------------------------------------------------------------------------
  // IUserActionService
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  public openOsrWindow(): void {
    this.triggerListenerEvent('onOpenOsrWindowRequested');
  }

  //----------------------------------------------------------------------------
  public openOsrInGameWindow(): void {
    this.triggerListenerEvent('onOpenOsrInGameWindowRequested');
  }
}
