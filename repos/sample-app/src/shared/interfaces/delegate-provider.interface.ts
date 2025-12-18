// -----------------------------------------------------------------------------
export interface DelegateProvider<T> {
  addListener(listener: T);
  removeListener(listener: T);
}
