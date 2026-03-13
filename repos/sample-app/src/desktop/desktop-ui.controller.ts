import { inject, singleton } from 'tsyringe';
import { Windows } from '@overwolf/odk-ts';
import { LoggerService } from '../shared/services/logger.service';
import { WindowUIController } from '../shared/services/window-ui-controller';
import {
  IUserActionService,
  kNameOfUserActionService,
} from '../shared/interfaces/user-action-service.interface';
import { kOsrWindowName } from '../background/constants';

//------------------------------------------------------------------------------
@singleton()
export class DesktopWindowUIController extends WindowUIController {
  //----------------------------------------------------------------------------
  public constructor(
    @inject(kNameOfUserActionService)
    private readonly userActionService: IUserActionService,
  ) {
    super(LoggerService.getCategory('DesktopWindowUIController'));
  }

  //----------------------------------------------------------------------------
  protected override bindActions(): void {
    super.bindActions();

    this.registerClickListener(
      'btn-open-osr',
      'Open OSR Window',
      this.handleOpenOsrWindow,
    );
    this.registerClickListener(
      'btn-open-osr-ingame',
      'Open OSR In-Game Window',
      this.handleOpenOsrInGameWindow,
    );
    this.registerClickListener(
      'btn-open-osr-ingame-dpi-unaware',
      'Open OSR In-Game DPI Unaware Window',
      this.handleOpenOsrInGameDpiUnawareWindow,
    );
    this.registerClickListener(
      'btn-fromd-get-bounds',
      'Get OSR bounds via FromId',
      this.handleFromIdGetBounds,
    );
    this.registerClickListener(
      'btn-fromd-center',
      'Center OSR via FromId',
      this.handleFromIdCenter,
    );
  }

  //----------------------------------------------------------------------------
  private handleOpenOsrWindow = (): void => {
    this.userActionService.openOsrWindow();
  };

  //----------------------------------------------------------------------------
  private handleOpenOsrInGameWindow = (): void => {
    this.userActionService.openOsrInGameWindow();
  };

  //----------------------------------------------------------------------------
  private handleOpenOsrInGameDpiUnawareWindow = (): void => {
    this.userActionService.openOsrInGameDpiUnawareWindow();
  };

  //----------------------------------------------------------------------------
  private readonly fromIdStatus = document.getElementById('fromd-status') as HTMLElement;

  //----------------------------------------------------------------------------
  private setFromIdStatus(text: string): void {
    this.fromIdStatus.style.display = 'block';
    this.fromIdStatus.textContent = text;
  }

  //----------------------------------------------------------------------------
  private handleFromIdGetBounds = async (): Promise<void> => {
    this.setFromIdStatus('Resolving…');
    const win = await Windows.FromId(kOsrWindowName);
    const bounds = await win.getBounds();
    this.setFromIdStatus(
      `bounds: x=${bounds.x} y=${bounds.y} w=${bounds.width} h=${bounds.height}`,
    );
  };

  //----------------------------------------------------------------------------
  private handleFromIdCenter = async (): Promise<void> => {
    this.setFromIdStatus('Resolving…');
    const win = await Windows.FromId(kOsrWindowName);
    await win.center();
    const bounds = await win.getBounds();
    this.setFromIdStatus(
      `centered → x=${bounds.x} y=${bounds.y} w=${bounds.width} h=${bounds.height}`,
    );
  };
}
