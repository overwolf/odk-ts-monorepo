import { inject, singleton } from 'tsyringe';
import { LoggerService } from '../shared/services/logger.service';
import { WindowUIController } from '../shared/services/window-ui-controller';
import {
  IUserActionService,
  kNameOfUserActionService,
} from '../shared/interfaces/user-action-service.interface';

//------------------------------------------------------------------------------
@singleton()
export class DesktopWindowUIController extends WindowUIController {
  //----------------------------------------------------------------------------
  public constructor(
    @inject(kNameOfUserActionService)
    private readonly userActionService: IUserActionService
  ) {
    super(LoggerService.getCategory('DesktopWindowUIController'));
  }

  //----------------------------------------------------------------------------
  protected override bindActions(): void {
    super.bindActions();

    this.registerClickListener(
      'btn-open-osr',
      'Open OSR Window',
      this.handleOpenOsrWindow
    );
    this.registerClickListener(
      'btn-open-osr-ingame',
      'Open OSR In-Game Window',
      this.handleOpenOsrInGameWindow
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
}
