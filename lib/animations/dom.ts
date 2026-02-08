export function selectAll<TElement extends Element>(
  scope: Element,
  selector: string,
): TElement[] {
  return Array.from(scope.querySelectorAll<TElement>(selector));
}

export function selectOne<TElement extends Element>(
  scope: Element,
  selector: string,
): TElement | null {
  return scope.querySelector<TElement>(selector);
}

