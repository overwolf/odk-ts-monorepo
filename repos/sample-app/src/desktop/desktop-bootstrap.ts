import 'reflect-metadata';
import {
  container,
  instancePerContainerCachingFactory,
  registry,
} from 'tsyringe';
import { WindowsTunnelDataService } from '../shared/services/windows-tunnel-data.service';
import { LoggerService } from '../shared/services/logger.service';
import { DesktopWindowUIController } from './desktop-ui.controller';
import { kNameOfUserActionService } from '../shared/interfaces/user-action-service.interface';

//------------------------------------------------------------------------------
@registry([
  {
    token: kNameOfUserActionService,
    useFactory: instancePerContainerCachingFactory((c) => {
      const tunnelDataService = c.resolve(WindowsTunnelDataService);
      return tunnelDataService.get(kNameOfUserActionService);
    }),
  },
])
class DesktopBootstrap {}

//------------------------------------------------------------------------------
const startup = () => {
  LoggerService.setup('Overwolf Development Kit (ODK) Sample App - Desktop');
  const controller = container.resolve(DesktopWindowUIController);
  controller.init();
};

startup();
