import { OSRType } from '../enums/osr_window_type';
import { WindowType } from '../enums/window_type';
import { DesktopWindowOptions } from '../options/desktop_window_options';
import { OSRWindowOptions } from '../options/osr_window_options';
import { Options } from '../options/window_options';

// -----------------------------------------------------------------------------
/** @internal */
export function applyDefaultOptions(options: Options, windowType: WindowType) {
  if (!options) {
    return;
  }

  if (options.grabFocusOnDesktop === undefined) {
    options.grabFocusOnDesktop = false;
  }

  if (options.popupBlocker === undefined) {
    options.popupBlocker = true;
  }

  if (options.blockTopWindowNavigation === undefined) {
    options.blockTopWindowNavigation = true;
  }

  if (options.autoDpi === undefined) {
    options.autoDpi = true;
  }

  if (options.isMuted === undefined) {
    options.isMuted = true;
  }

  if (windowType === WindowType.Desktop) {
    _applyDefaultOptionsDesktop(options);
  }

  if (windowType === WindowType.Offscreen) {
    _applyDefaultOptionsOffscreen(options);
  }
}

// -----------------------------------------------------------------------------
function _applyDefaultOptionsDesktop(options: DesktopWindowOptions) {
  if (options.showInTaskBar === undefined) {
    options.showInTaskBar = true;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  options.desktopWindow = true;
}

// -----------------------------------------------------------------------------
function _applyDefaultOptionsOffscreen(options: OSRWindowOptions) {
  if (options.type === undefined) {
    options.type = OSRType.Default;
  }

  if (options.transparent === undefined) {
    options.transparent = true;
  }

  if (options.autoZoom === undefined) {
    options.autoZoom = true;
  }

  if (options.disableHardwareAcceleration === undefined) {
    options.disableHardwareAcceleration = true;
  }

  if (options.type === OSRType.InGameOnly) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    options.InGameOnly = true;
  }

  if (options.type === OSRType.DesktopOnly) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    options.DesktopOnly = true;
  }
}
