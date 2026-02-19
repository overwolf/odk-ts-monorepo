export class PromiseResolver {
  private _promise: Promise<void> | undefined;
  private _promiseResolver: ((value: void | PromiseLike<void>) => void) | undefined;
  private _promiseRejector: ((value: void | PromiseLike<void>) => void) | undefined;

  constructor () {
    this._promise = new Promise((resolve, reject) => {
      this._promiseResolver = resolve;
      this._promiseRejector = reject;
    });
  }

  // ---------------------------------------------------------------------------
  public promise (): Promise<void> {
    return this._promise;
  }

  // ---------------------------------------------------------------------------
  public resolve () {
    if (!this._promise || !this._promiseResolver) {
      return;
    }

    this._promiseResolver();
    this._promiseRejector = undefined;
  }

  // ---------------------------------------------------------------------------
  public reject (error: any) {
    if (!this._promise || !this._promiseRejector) {
      return;
    }

    try {
      this._promiseRejector(error);
    } catch {}
  }
}
