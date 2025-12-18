import { Edge } from '../enums/edge';

/**
 * Options for an Overwolf window
 */
export interface Options {
  /**
   * [Mandatory] ID of the window
   */
  id: string;

  /**
   * Path to the file to load inside the window
   */
  url?: string;

  /**
   * Whether the window should be visible
   */
  visible?: boolean;

  /**
   * X position of the window, mandatory if Y is provided
   */
  x?: number;

  /**
   * Y position of the window, mandatory if X is provided
   */
  y?: number;

  /**
   * Window width in pixels
   */
  width?: number;

  /**
   * Window height in pixels
   */
  height?: number;

  /**
   * Dock the window to a specific edge of the screen
   */
  dockPosition?: Edge;

  /**
   * Minimum pixel width of the window
   *
   */
  minWidth?: number;

  /**
   * Minimum pixel height of the window
   */
  minHeight?: number;

  /**
   *  Maximum pixel width of the window
   */
  maxWidth?: number;

  /**
   * Maximum pixel height of the window
   */
  maxHeight?: number;

  /**
   * Indicates whether the window will be on top of other Overwolf windows.
   * Handle with care as topmost windows can negatively impact user experience.
   *
   * @default false
   */
  topMost?: boolean;

  /**
   * Indicates whether the window can be resized.
   *
   * @default false
   */
  resizable?: boolean;

  /**
   * Should dimensions provided for various methods account for DPI
   *
   * @default true
   */
  autoDpi?: boolean;

  /**
   * Should zoom be automatically set to account for DPI
   *
   * @default true (for OSR)
   */
  autoZoom?: boolean;

  /**
   * Do not change window location when changing game focus
   *
   * @default false
   */
  keepWindowLocation?: boolean;

  /**
   * Block the user from closing the window using Alt+F4
   *
   * @default false
   */
  isAltF4Blocked?: boolean;

  /**
   * Define if the window is displayed in the Windows taskbar 
   * and alt-tab window selection menu.
   *
   * @default true (for native windows) / false(for OSR windows)
   */
  showInTaskBar?: boolean;

  /**
   * Disable JS engine background optimizations(for better performance).
   *
   * @default true
   */
  disableBackgroundOptimization?: boolean;

  /**
   * Indicates whether the window will grab the focus automatically when it opens,
   * or leave the focus untouched.
   * Only relevant when in the desktop - for in-game focus behavior, use grabKeyboardFocus.
   *
   * @default false
   */
  grabFocusOnDesktop?: boolean;

  /**
   * Indicates whether to show the window maximize button.
   * Only relevant for Native or OSR non-transparent windows.
   *
   * @default false
   */
  showMaximize?: boolean;

  /**
   * Indicates whether to show the window minimize button.
   * Only relevant for Native or OSR non-transparent windows.
   *
   * @default true
   */
  showMinimize?: boolean;

  /**
   * Enable access to the file:// scheme from JS
   *
   * @default false
   */
  allowLocalFileAccess?: boolean;

  /**
   * Block all none user Gesture popups
   *
   * @default true
   */
  popupBlocker?: boolean;

  /**
   * Prevent from scripts or iframe navigate top window to different url such as (http://www.google.com),
   * Instead it will open the url in browser
   *
   * @default true
   */
  blockTopWindowNavigation?: boolean;

  /**
   * Indicates whether the window will animate on minimize/restore while in game.
   *
   * @default false
   */
  disableAnimations?: boolean;

  /**
   * JS will not lose focus.
   *
   * @default false
   */
  disableBlur?: boolean;
}
