type LegacyMediaQueryList = MediaQueryList & {
  addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
  removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
};

export function subscribeToMediaQueryChange(
  mediaQuery: MediaQueryList,
  onChange: () => void,
): () => void {
  const listener = () => {
    onChange();
  };

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }

  const legacyMediaQuery = mediaQuery as LegacyMediaQueryList;
  legacyMediaQuery.addListener?.(listener);

  return () => {
    legacyMediaQuery.removeListener?.(listener);
  };
}
