"use client";

import { useEffect, useSyncExternalStore } from "react";

export type ConsentValue = "granted" | "denied";

const STORAGE_KEY = "sf-cookie-consent";

let current: ConsentValue | null = null;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * Snapshot used during render. Always starts as `null` on both the server and
 * the first client render so hydration matches; the stored value is read once
 * in an effect via {@link readConsent}.
 */
function getSnapshot(): ConsentValue | null {
  return current;
}

function getServerSnapshot(): ConsentValue | null {
  return null;
}

/** Reads the persisted decision. Safe to call only on the client. */
export function readConsent(): ConsentValue | null {
  let next: ConsentValue | null = null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") next = stored;
  } catch {
    // localStorage can throw in private mode / blocked-cookie contexts.
  }
  if (next !== current) {
    current = next;
    emit();
  }
  return next;
}

export function setConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore write failures; the in-memory value still applies this session.
  }
  current = value;
  emit();
}

/** Clears the stored decision so the banner is shown again. */
export function clearConsent() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore.
  }
  current = null;
  emit();
}

/**
 * Subscribes to the cookie-consent decision.
 * Returns `null` while the visitor has not made a choice yet.
 */
export function useConsent(): ConsentValue | null {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    readConsent();
  }, []);

  return consent;
}
