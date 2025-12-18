import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoggerService } from '../shared/services/logger.service';
import { OsrWindowUIController } from './osr-ui.controller';

//------------------------------------------------------------------------------
const startup = () => {
  LoggerService.setup('Overwolf Development Kit (ODK) Sample App - OSR');
  const controller = container.resolve(OsrWindowUIController);
  controller.init();
};

startup();
