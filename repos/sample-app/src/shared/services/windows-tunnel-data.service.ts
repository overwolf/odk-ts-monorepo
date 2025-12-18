import { singleton } from 'tsyringe';
import { OWMainWindowWrapper } from '../wrappers/ow-main-window-wrapper';

// -----------------------------------------------------------------------------
const kTunnelPropertyName = '__WINDOWS_TUNNEL_DATA_SERVICE__';
export const kTunnelDataPromotionInfo = 'promotionInfo';
export const kTunnelDataUserAction = 'userAction';

// -----------------------------------------------------------------------------
@singleton()
export class WindowsTunnelDataService {
  private _globalDataMap: Map<string, any> = null;

  // ---------------------------------------------------------------------------
  constructor(private readonly owMainWIndowWrapper: OWMainWindowWrapper) {
    this.initialize();
  }

  // ---------------------------------------------------------------------------
  private initialize() {
    const mainWindow = this.owMainWIndowWrapper.getMainWindow();
    if (!mainWindow) {
      console.error('Could not get main window!');
      return;
    }

    const data = mainWindow[kTunnelPropertyName];
    if (!data) {
      mainWindow[kTunnelPropertyName] = {};
    }

    this._globalDataMap = mainWindow[kTunnelPropertyName];
  }

  // ---------------------------------------------------------------------------
  set(key: string, data: any) {
    if (!this._globalDataMap) {
      console.error('globalDataMap is undefined');
      return;
    }

    this._globalDataMap[key] = data;
  }

  // ---------------------------------------------------------------------------
  get(key: string) {
    if (!this._globalDataMap) {
      console.error('globalDataMap is undefined');
      return;
    }

    return this._globalDataMap[key];
  }
}
