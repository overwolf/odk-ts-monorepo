/**
 * Compares two dotted numeric version strings (e.g. Overwolf's "0.255.0.21").
 * Missing segments are treated as 0, so "0.255" === "0.255.0.0".
 *
 * @returns negative if `a` < `b`, `0` if equal, positive if `a` > `b`.
 */
export function compareVersions(a: string, b: string): number {
  const pa = (a ?? '').split('.');
  const pb = (b ?? '').split('.');
  const len = Math.max(pa.length, pb.length);

  for (let i = 0; i < len; i++) {
    const na = parseInt(pa[i], 10) || 0;
    const nb = parseInt(pb[i], 10) || 0;

    if (na !== nb) {
      return na < nb ? -1 : 1;
    }
  }

  return 0;
}

/**
 * Returns `true` if the running Overwolf client version is older than `version`.
 */
export function isOverwolfVersionBelow(version: string): boolean {
  return compareVersions(overwolf.version, version) < 0;
}
