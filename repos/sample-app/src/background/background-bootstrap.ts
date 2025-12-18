import 'reflect-metadata';
import { container, injectable } from 'tsyringe';
import { LoggerService } from '../shared/services/logger.service';
import { BackgroundController } from './background.controller';
import { ExternalServicesExposerService } from './services/external-services-exposer.service';
import { BackgroundRegistry } from './bootstrap/background.registry';
import { ExternalServicesRegistry } from './bootstrap/external-services.registy';

// This exposes the dependency injection registries.
const registries = [new BackgroundRegistry(), new ExternalServicesRegistry()];

//------------------------------------------------------------------------------
@injectable()
export class BackgroundBootstrap {
  //----------------------------------------------------------------------------
  public constructor(
    private readonly backgroundController: BackgroundController,
    private readonly exposureService: ExternalServicesExposerService
  ) {
    this.startup();
  }

  //----------------------------------------------------------------------------
  private startup(): void {
    LoggerService.setup(
      'Overwolf Development Kit (ODK) Sample App - Background'
    );

    this.exposureService.initialize();
    this.backgroundController.run();
  }
}

container.resolve(BackgroundBootstrap);
