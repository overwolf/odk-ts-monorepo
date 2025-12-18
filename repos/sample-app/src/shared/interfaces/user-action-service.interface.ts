import { IExposableService } from '../../background/services/external-services-exposer.service';

//------------------------------------------------------------------------------
export const kNameOfUserActionService = 'UserActionService';

//------------------------------------------------------------------------------
export interface IUserActionService extends IExposableService {
  openOsrWindow(): void;
  openOsrInGameWindow(): void;
}

//------------------------------------------------------------------------------
export interface IUserActionServiceDelegate {
  onOpenOsrWindowRequested(): void;
  onOpenOsrInGameWindowRequested(): void;
}
