'use client';

import { useState, useSyncExternalStore } from 'react';

type Listener = () => void;

class CounterStore {
  private counter = 0;
  private listeners: Set<Listener> = new Set();

  getState = () => this.counter;

  subscribe = (listener: Listener) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  increment = () => {
    this.counter++;
    this.notify();
  };

  decrement = () => {
    this.counter--;
    this.notify();
  };

  reset = () => {
    this.counter = 0;
    this.notify();
  };

  private notify = () => {
    this.listeners.forEach(listener => listener());
  };
}

const store = new CounterStore();

export function useCounter() {
  return useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getState, // getServerSnapshot - 서버에서도 동일한 값을 반환
  );
}

export function useCounterActions() {
  return {
    increment: store.increment,
    decrement: store.decrement,
    reset: store.reset,
  };
}
