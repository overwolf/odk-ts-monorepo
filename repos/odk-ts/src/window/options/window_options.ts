import { Edge } from '../enums/edge';

/**
 * Base options for configuring an Overwolf window.
 *
 * These options define window identity, positioning, sizing, visibility,
 * behavior, and interaction characteristics. More specialized window
 * types extend this interface.
 *
 * @see {@link DesktopWindowOptions}
 * @see {@link OSRWindowOptions}
 */
export interface Options {
  /**
   * Unique ID of the window. (Mandatory)
   */
  id: string;

  /**
   * The path or URL to load inside the window.
   */
  url?: string;

  /**
   * Indicates whether the window should be visible.
   */
  visible?: boolean;

  /**
   * The horizontal position of the window.
   *
   * Mandatory if {@link y} is provided.
   */
  x?: number;

  /**
  /**
   * The vertical position of the window.
   *
   * Mandatory if {@link x} is provided.
   */
  y?: number;

  /**
 * The width of the window in pixels.   */
  width?: number;

  /**
   * The height of the window in pixels.
   */
  height?: number;

  /**
   * Dock the window to a specific edge of the screen.
   */
  dockPosition?: Edge;

  /**
   * The minimum width of the window in pixels.
   *
   */
  minWidth?: number;

  /**
   * The minimum height of the window in pixels.
   */
  minHeight?: number;

  /**
   * The maximum width of the window in pixels.
   */
  maxWidth?: number;

  /**
   * The maximum height of the window in pixels.
   */
  maxHeight?: number;

  /**
   * Indicates whether the window will stay on top of other Overwolf windows.
   *
   * Use with care, as topmost windows can negatively impact user experience.
   *
   * @default false
   */
  topMost?: boolean;

  /**
   * Indicates whether the window can be resized by the user.
   *
   * @default false
   */
  resizable?: boolean;

  /**
   * Indicates whether provided dimensions should automatically account for DPI scaling.
   *
   * @default true
   */
  autoDpi?: boolean;

  /**
   * Indicates whether the window zoom level should automatically account for DPI scaling.
   *
   * @default true (for OSR)
   */
  autoZoom?: boolean;

  /**
   * Prevents the window location from changing when game focus changes.
   *
   * @default false
   */
  keepWindowLocation?: boolean;

  /**
   * Blocks the user from closing the window using Alt+F4.
   *
   * @default false
   */
  isAltF4Blocked?: boolean;

  /**
   * Indicates whether the window is displayed in the Windows taskbar
   * and Alt+Tab window selection menu.
   *
   * @default true (native windows), false (OSR windows)
   */
  showInTaskBar?: boolean;

  /**
   * Disables JavaScript engine background optimizations for improved performance.
   *
   * @default true
   */
  disableBackgroundOptimization?: boolean;


  /**
   * Indicates whether the window will automatically grab focus when opened on desktop.
   *
   * For in-game keyboard focus behavior, use `grabKeyboardFocus`.
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
   * Indicates whether the window minimize button should be shown.
   *
   * Relevant only for native windows or non-transparent OSR windows.
   *
   * @default true
   */
  showMinimize?: boolean;

  /**
   * Enables access to the `file://` scheme from JavaScript.
   *
   * @default false
   */
  allowLocalFileAccess?: boolean;

  /**
   * Block all none user Gesture popups.
   *
   * @default true
   */
  popupBlocker?: boolean;

  /**
   * Prevents scripts or iframes from navigating the top-level window
   * to a different URL.
   *
   * Instead, the URL will be opened in the system browser.
   *
   * @default true
   */
  blockTopWindowNavigation?: boolean;

  /**
   * Disables minimize and restore animations while in game.
   *
   * @default false
   */
  disableAnimations?: boolean;

  /**
   * Prevents the JavaScript context from losing focus.
   *
   * @default false
   */
  disableBlur?: boolean;

  /**
   * Disables right-click interactions entirely for this window.
   *
   * @default false
   */
  disableRightClick?: boolean;

  /**
   * Mutes all audio output from the window.
   *
   * @default true
   */
  isMuted?: boolean;

  /**
   * A list of host patterns that will not be muted even when the window is muted.
   *
   * @example
   * ```ts
   * muteExcludedHosts: [
   *   "*.youtube.*",
   *   "*.twitch.*"
   * ]
   * ```
   */
  muteExcludedHosts?: string[];
}
