import {
  DesktopWindowOptions,
  OSRWindowOptions,
  WindowBase,
} from '@overwolf/odk-ts';
import { DelegateProvider } from './delegate-provider.interface';

//------------------------------------------------------------------------------
export interface IWindowManagerServiceDelegate {
  onAllWindowsClosed(): void;
}

//------------------------------------------------------------------------------
export interface IWindowManagerService
  extends DelegateProvider<IWindowManagerServiceDelegate> {
  openDesktopWindow(options: DesktopWindowOptions): Promise<WindowBase>;
  openOsrWindow(options: OSRWindowOptions): Promise<WindowBase>;
  openOsrInGameWindow(options: OSRWindowOptions): Promise<WindowBase>;
  openOsrInGameDpiUnawareWindow(options: OSRWindowOptions): Promise<WindowBase>;
}
