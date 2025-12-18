import { singleton } from 'tsyringe';

// -----------------------------------------------------------------------------
// NOTE(twolf): This is a (sort-of) wrapper that allows what relate to
// application level actions - such as shutting down the application.
@singleton()
export class OWApplicationWrapper {
  // ---------------------------------------------------------------------------
  public shutdown() {
    overwolf.windows.getMainWindow()?.close();
  }
}
