import { OSRType } from './../enums/osr_window_type';
import { Options } from './window_options';

/**
 * Options for an OSR window
 */
export interface OSRWindowOptions extends Options {
  /**
   * The type of the OSR window
   *
   * @default OSRType.Default {@link OSRType}
   */
  type?: OSRType;

  /**
   * Indicates whether the window will be transparent and borderless.
   * If set to false a standard Overwolf window will be created
   *
   * @default true
   */
  transparent?: boolean;

  /**
   * Indicates whether the window will not receive clicks in-game.
   * Instead, the clicks will be passed on to the game.
   *
   * @default false
   */
  clickThrough?: boolean;

  /**
   * Indicates whether the window will not receive keyboard events.
   * Instead, the keyboard events will be passed on to the game.
   *
   * @default false
   */
  ignoreKeyboardEvents?: boolean;

  /**
   * Indicates whether the window will grab the keyboard focus automatically
   * when it opens, or leave the keyboard focus untouched.
   *
   * @default false
   */
  grabKeyboardFocus?: boolean; // in game behavior

  /**
   * Restrict window to game client (window) area.
   * Window will always stay inside the game window while dragging.
   *
   * @default false
   */
  restrictToGameBounds?: boolean;

  /**
   * Indicates whether the window will be under all other Overwolf windows (In Game only).
   *
   * @default false
   */
  bottommost?: boolean;

  /**
   * Disable fully transparent window direct overlay rendering (for better performance).
   *
   * @default false
   */
  disableDirectRendering?: boolean;

  /**
   * Mouse and keyboard input will pass through window the to game (no input blocking).
   *
   * @default false
   */
  inputPassThrough?: boolean;

  /**
   * Indicates whether the window will be visible only on the desktop and not while in game.
   *
   * @default false
   */
  desktopOnly?: boolean;
}
