import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoggerService } from '../shared/services/logger.service';
import { OsrInGameDpiUnawareWindowUIController } from './osr-in-game-dpi-unaware-ui.controller';

//------------------------------------------------------------------------------
const startup = () => {
  LoggerService.setup(
    'Overwolf Development Kit (ODK) Sample App - OSR In-Game DPI Unaware',
  );
  const controller = container.resolve(OsrInGameDpiUnawareWindowUIController);
  controller.init();
};

startup();
