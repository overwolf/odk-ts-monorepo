import { DelegateProvider } from './delegate-provider.interface';
import { DesktopWindowOptions } from '@overwolf/odk-ts/window/options/desktop_window_options';
import { OSRWindowOptions } from '@overwolf/odk-ts/window/options/osr_window_options';

//------------------------------------------------------------------------------
export interface IWindowManagerServiceDelegate {
  onAllWindowsClosed(): void;
}

//------------------------------------------------------------------------------
export interface IWindowManagerService
  extends DelegateProvider<IWindowManagerServiceDelegate> {
  openDesktopWindow(options: DesktopWindowOptions): Promise<void>;
  openOsrWindow(options: OSRWindowOptions): Promise<void>;
  openOsrInGameWindow(options: OSRWindowOptions): Promise<void>;
}
