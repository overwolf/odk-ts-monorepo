import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoggerService } from '../shared/services/logger.service';
import { OsrInGameWindowUIController } from './osr-in-game-ui.controller';

//------------------------------------------------------------------------------
const startup = () => {
  LoggerService.setup(
    'Overwolf Development Kit (ODK) Sample App - OSR In-Game'
  );
  const controller = container.resolve(OsrInGameWindowUIController);
  controller.init();
};

startup();
