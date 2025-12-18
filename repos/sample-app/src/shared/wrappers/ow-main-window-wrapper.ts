import { injectable } from 'tsyringe';

// -------------------------------------------------------------
@injectable()
export class OWMainWindowWrapper {
  // -------------------------------------------------------------
  public getMainWindow(): Window {
    if (!overwolf?.windows?.getMainWindow) {
      return null;
    }

    return overwolf.windows.getMainWindow();
  }
}
