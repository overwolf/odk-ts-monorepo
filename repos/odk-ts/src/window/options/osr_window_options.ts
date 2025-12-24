/* eslint-disable max-len */
import { OSRType } from './../enums/osr_window_type';
import { Options } from './window_options';

/**
 * Options for configuring an OSR (Off-Screen Rendering) window.
 *
 * These options extend the base {@link Options} and control OSR-specific
 * behavior such as transparency, input handling, focus management,
 * and in-game interaction.
 *
 * @see {@link Options}
 * @see {@link OSRType}
 */
export interface OSRWindowOptions extends Options {
  /**
   * The type of the OSR window.
   *
   * @default OSRType.Default {@link OSRType}
   */
  type?: OSRType;

  /**
   * Indicates whether the window will be transparent and borderless.
   * When enabled, mouse input is passed through to the game.
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
   * When enabled, keyboard input is passed through to the game.
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
   * When enabled, the window will always remain inside the game window
   * while being dragged.
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
   * Disable fully transparent window direct overlay rendering (to improve performance).
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

  /**
   * Allows you to control the behavior of an app window while in a “mouse-less” game state.
   */
  takeOverAction?: 'ReleaseOnHidden' | 'ReleaseOnLostFocus';

  /**
   * Allow Overwolf to display your app’s hotkey combination on the screen when the user switches to “exclusive mode”.
   * The string value should be the hotkey name from the hotkeys section.
   * Relevant only if you set takeOverAction=ReleaseOnHidden.
   */
  takeOverReleaseHotkey?: string;

  /**
   * Disable GPU hardware acceleration, per window.
   * 
   * @default true (disabled in OSR windows)
   */
  disableHardwareAcceleration?: boolean;
}
