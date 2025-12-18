import { singleton } from 'tsyringe';
import { LoggerService } from '../shared/services/logger.service';
import { WindowUIController } from '../shared/services/window-ui-controller';

//------------------------------------------------------------------------------
@singleton()
export class OsrWindowUIController extends WindowUIController {
  //----------------------------------------------------------------------------
  public constructor() {
    super(LoggerService.getCategory('OsrWindowUIController'));
  }
}
