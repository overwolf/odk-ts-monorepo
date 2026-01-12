import { WindowBase, Windows } from '@overwolf/odk-ts';
import { Edge } from '@overwolf/odk-ts/window/enums/edge';
import { Category } from 'typescript-logging-category-style';
import { Size } from '@overwolf/odk-ts/window/interfaces/size';
import { Point } from '@overwolf/odk-ts/window/interfaces/point';
import { EnumConvertors } from '../utils/enum-convertors';

type NumberInput = HTMLInputElement;

// min width and height for setting size/bounds
const MIN_SIZE = 200;

//----------------------------------------------------------------------------
export abstract class WindowUIController {
  private window: WindowBase;

  // UI Elements
  private readonly xInput = document.getElementById('input-x') as NumberInput;
  private readonly yInput = document.getElementById('input-y') as NumberInput;
  private readonly widthInput = document.getElementById(
    'input-width'
  ) as NumberInput;
  private readonly heightInput = document.getElementById(
    'input-height'
  ) as NumberInput;
  private readonly edgeSelect = document.getElementById(
    'select-edge'
  ) as HTMLSelectElement;
  private readonly marginXInput = document.getElementById(
    'input-margin-x'
  ) as NumberInput;
  private readonly marginYInput = document.getElementById(
    'input-margin-y'
  ) as NumberInput;

  //----------------------------------------------------------------------------
  public constructor(protected readonly logger: Category) {}

  //----------------------------------------------------------------------------
  public async init(): Promise<void> {
    try {
      this.window = await Windows.Self();
      this.logger.info(
        'WindowUIController initialized for window:',
        this.window.Id()
      );

      this.initializeWindowEvents();
      this.bindActions();
      this.bindResizeActions();
      await this.refreshBounds();
    } catch (err) {
      this.logger.error('Failed to initialize DesktopController', err);
      this.window?.close();
    }
  }

  //----------------------------------------------------------------------------
  protected bindActions(): void {
    // button click listeners
    this.registerClickListener(
      'btn-set-position',
      'Set position',
      this.handleSetPosition
    );
    this.registerClickListener('btn-set-size', 'Set size', this.handleSetSize);
    this.registerClickListener(
      'btn-set-bounds',
      'Set bounds',
      this.handleSetBounds
    );
    this.registerClickListener(
      'btn-set-bounds',
      'Set bounds',
      this.handleSetBounds
    );
    this.registerClickListener('btn-center', 'Center', this.handleCenter);
    this.registerClickListener('btn-dock', 'Dock', this.handleDock);
    this.registerClickListener('btn-anchor', 'Anchor', this.handleAnchor);
    this.registerClickListener(
      'btn-clear-anchor',
      'Clear anchor/dock',
      this.handleClearAnchor
    );
    this.registerClickListener(
      'btn-refresh',
      'Refresh bounds',
      this.refreshBounds
    );
    this.registerClickListener(
      'toolbar-minimize',
      'Minimize window',
      this.handleMinimize
    );
    this.registerClickListener(
      'toolbar-maximize',
      'Maximize/restore window',
      this.handleMaximize
    );
    this.registerClickListener(
      'toolbar-close',
      'Close window',
      this.handleClose
    );

    // mouse down listeners for drag
    this.registerMouseDownListener(
      'drag-handle',
      'Drag handle',
      this.handleDrag
    );
    this.registerMouseDownListener('btn-drag', 'Drag button', this.handleDrag);
    this.registerMouseDownListener(
      'toolbar-drag',
      'Toolbar drag',
      this.handleDrag
    );
  }

  //----------------------------------------------------------------------------
  protected bindResizeActions() {
    const resizeIds = [
      'ow-resize-left',
      'ow-resize-right',
      'ow-resize-top',
      'ow-resize-bottom',
      'ow-resize-tl',
      'ow-resize-tr',
      'ow-resize-br',
      'ow-resize-bl',
    ];

    for (const id of resizeIds) {
      this.registerResizeHandler(id);
    }
  }

  //----------------------------------------------------------------------------
  protected registerClickListener(
    id: string,
    label: string,
    handler: () => void | Promise<void>
  ): void {
    this.registerEventListener('click', id, label, handler);
  }

  //----------------------------------------------------------------------------
  protected registerMouseDownListener(
    id: string,
    label: string,
    handler: () => void | Promise<void>
  ): void {
    this.registerEventListener('mousedown', id, label, handler);
  }

  //----------------------------------------------------------------------------
  private registerEventListener(
    event: keyof HTMLElementEventMap,
    id: string,
    label: string,
    handler: () => void | Promise<void>
  ): void {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    el.addEventListener(event, () => void this.performAction(label, handler));
  }

  //----------------------------------------------------------------------------
  private performAction = async (
    label: string,
    action: () => void | Promise<void>
  ): Promise<void> => {
    try {
      await action();
    } catch (err) {
      this.logger.error(`Failed to ${label}`, err);
    }
  };

  //----------------------------------------------------------------------------
  private initializeWindowEvents() {
    this.window.on('resized', (evt, newSize) => {
      this.onWindowResized(newSize);
    });

    this.window.on('moved', (evt, newPosition) => {
      this.onWindowMoved(newPosition);
    });
  }

  //----------------------------------------------------------------------------
  private toNumber = (input: NumberInput, fallback = 0): number => {
    const parsed = parseFloat(input.value);
    return isFinite(parsed) ? parsed : fallback;
  };

  //----------------------------------------------------------------------------
  private refreshBounds = async (): Promise<void> => {
    const bounds = await this.window.getBounds();

    this.logger.info('Current window bounds:', bounds);

    this.xInput.value = (bounds.x ?? 0).toString();
    this.yInput.value = (bounds.y ?? 0).toString();
    this.widthInput.value = (bounds.width ?? 0).toString();
    this.heightInput.value = (bounds.height ?? 0).toString();
  };

  //----------------------------------------------------------------------------
  private handleSetPosition = async (): Promise<void> => {
    await this.window.setPosition({
      x: this.toNumber(this.xInput),
      y: this.toNumber(this.yInput),
    });
  };

  //----------------------------------------------------------------------------
  private handleSetSize = async (): Promise<void> => {
    await this.window.setSize({
      width: this.toNumber(this.widthInput, MIN_SIZE),
      height: this.toNumber(this.heightInput, MIN_SIZE),
    });
  };

  //----------------------------------------------------------------------------
  private handleSetBounds = async (): Promise<void> => {
    await this.window.setBounds({
      x: this.toNumber(this.xInput),
      y: this.toNumber(this.yInput),
      width: this.toNumber(this.widthInput, MIN_SIZE),
      height: this.toNumber(this.heightInput, MIN_SIZE),
    });
  };

  //----------------------------------------------------------------------------
  private handleCenter = async (): Promise<void> => {
    await this.window.center();
  };

  //----------------------------------------------------------------------------
  private handleDrag = async (): Promise<void> => {
    await this.window.move();
  };

  //----------------------------------------------------------------------------
  private handleDock = async (): Promise<void> => {
    const edge = this.edgeSelect.value as Edge;

    await this.window.dock(edge, {
      marginX: this.toNumber(this.marginXInput),
      marginY: this.toNumber(this.marginYInput),
    });
  };

  //----------------------------------------------------------------------------
  private handleAnchor = async (): Promise<void> => {
    const edge = this.edgeSelect.value as Edge;

    await this.window.anchor(edge, {
      marginX: this.toNumber(this.marginXInput),
      marginY: this.toNumber(this.marginYInput),
    });
  };

  //----------------------------------------------------------------------------
  private handleClearAnchor = async (): Promise<void> => {
    await this.window.anchor(Edge.None, { marginX: 0, marginY: 0 });
  };

  //----------------------------------------------------------------------------
  private handleMinimize = async (): Promise<void> => {
    await this.window.minimize();
  };

  //----------------------------------------------------------------------------
  private handleMaximize = async (): Promise<void> => {
    const state = await this.window.getWindowState();
    if (state === 'maximized') {
      await this.window.restore();
    } else {
      await this.window.maximize();
    }
  };

  //----------------------------------------------------------------------------
  private handleClose = async (): Promise<void> => {
    await this.window.close();
  };

  //----------------------------------------------------------------------------
  private onWindowResized(newSize: Size): void {
    this.refreshBounds();
  }

  //----------------------------------------------------------------------------
  private onWindowMoved(newPosition: Point): void {
    this.refreshBounds();
  }

  //----------------------------------------------------------------------------
  // The following methods handle window resizing via custom resize handles.
  // This is only relevant for OSR windows that are defined as transparent (default),
  // since regular (native) windows have native resize borders.
  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  private registerResizeHandler(id: string, label = 'resize window'): void {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    el.addEventListener(
      'mousedown',
      (ev) =>
        void this.performAction(
          label,
          async () => await this.tryStartResizeFromEvent(ev as MouseEvent)
        )
    );
  }

  //----------------------------------------------------------------------------
  private async tryStartResizeFromEvent(ev: MouseEvent): Promise<void> {
    const edge = this.getResizeEdgeFromEvent(ev);
    if (!edge) {
      return;
    }

    await this.window.dragResize(edge);
  }

  //----------------------------------------------------------------------------
  // Determines the resize edge from the mouse event target
  private getResizeEdgeFromEvent(
    ev: MouseEvent
  ): overwolf.windows.enums.WindowDragEdge | null {
    const target = ev.target as HTMLElement | null;
    const handle = target?.closest?.('.ow-resize') as HTMLElement | null;
    if (!handle) {
      return null;
    }

    const edgeStr = handle.getAttribute('data-edge') || '';
    if (!edgeStr) {
      return null;
    }

    const edgeEnum = EnumConvertors.WindowResizeEdgeMapping[edgeStr];
    if (!edgeEnum || edgeEnum === overwolf.windows.enums.WindowDragEdge.None) {
      return null;
    }

    return edgeEnum;
  }
}
