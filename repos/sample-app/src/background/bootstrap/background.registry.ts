import { instancePerContainerCachingFactory, registry } from 'tsyringe';
import { IWindowManagerService } from '../../shared/interfaces/window-manager-service.interface';
import {
  IUserActionService,
  kNameOfUserActionService,
} from '../../shared/interfaces/user-action-service.interface';
import { UserActionService } from '../services/user-action-service';
import {
  kNameOfWindowManagerService,
  WindowManagerService,
} from '../services/window-manager-service';

@registry([
  //----------------------------------------------------------------------------
  // Window Manager Service
  {
    token: kNameOfWindowManagerService,
    useFactory: instancePerContainerCachingFactory<IWindowManagerService>(
      (c) => {
        return c.resolve(WindowManagerService);
      }
    ),
  },
  // ----------------------------------------------------------------------------
  // User Action Service
  {
    token: kNameOfUserActionService,
    useFactory: instancePerContainerCachingFactory<IUserActionService>((c) => {
      return c.resolve(UserActionService);
    }),
  },
])
export class BackgroundRegistry {}
