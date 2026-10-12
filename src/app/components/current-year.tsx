"use client";

import { useSyncExternalStore } from "react";

// The year never changes during a session, so there is nothing to subscribe to.
const subscribe = () => () => {};

/**
 * Renders the current year on the client only. Computing `new Date()` during
 * prerender is flagged as an unstable value by Next.js, so the server snapshot
 * is empty and the real year is read once hydrated.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => String(new Date().getFullYear()),
    () => ""
  );

  return <>{year}</>;
}
