import { injectable, injectAll } from 'tsyringe';
import { WindowsTunnelDataService } from '../../shared/services/windows-tunnel-data.service';

// -----------------------------------------------------------------------------
export interface IExposableService {
  get token(): string;
}

export const kDITokenExternalService = 'ExternalService';

// -----------------------------------------------------------------------------
// This service is what allows non-background windows to access background
// services. In order to register an external service - the service must
// extend |ExposableService|
@injectable()
export class ExternalServicesExposerService {
  // ---------------------------------------------------------------------------
  public constructor(
    private readonly windowsTunnelDataService: WindowsTunnelDataService,
    @injectAll(kDITokenExternalService)
    private readonly services: IExposableService[]
  ) {}

  // ---------------------------------------------------------------------------
  public initialize() {
    for (const service of this.services) {
      this.windowsTunnelDataService.set(service.token, service);
    }
  }
}
