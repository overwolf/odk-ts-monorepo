/**
 * In-game window styles that can be applied to a window.
 *
 * @see {@link WindowBase.setWindowStyle}
 * @see {@link WindowBase.removeWindowStyle}
 */
export enum WindowStyle {
  /**
   * Mouse and keyboard input passes through the window to the game, so the
   * window never blocks input.
   */
  InputPassThrough = 'InputPassThrough',

  /**
   * The window sits under all other Overwolf windows. In-game only.
   */
  BottomMost = 'BottomMost',
}
