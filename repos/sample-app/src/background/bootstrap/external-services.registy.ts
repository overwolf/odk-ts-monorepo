import { instancePerContainerCachingFactory, registry } from 'tsyringe';
import {
  IExposableService,
  kDITokenExternalService,
} from '../services/external-services-exposer.service';
import { UserActionService } from '../services/user-action-service';
import {
  IUserActionService,
  kNameOfUserActionService,
} from '../../shared/interfaces/user-action-service.interface';

// -----------------------------------------------------------------------------
// This is were we register all the external services - i.e. services we want
// other windows to be able to access (yet not have to create an actual
// instance for them).
@registry([
  // ----------------------------------------------------------------------------
  // User Action Service
  {
    token: kNameOfUserActionService,
    useFactory: instancePerContainerCachingFactory<IUserActionService>((c) =>
      c.resolve(UserActionService)
    ),
  },
  //----------------------------------------------------------------------------
  // Exposable Services
  {
    token: kDITokenExternalService,
    useFactory: instancePerContainerCachingFactory<IExposableService>((c) =>
      c.resolve(kNameOfUserActionService)
    ),
  },
])
export class ExternalServicesRegistry {}
