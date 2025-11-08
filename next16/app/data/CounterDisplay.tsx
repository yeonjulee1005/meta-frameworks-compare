'use client';

import { useCounter } from '@/lib/counter-store';

export function CounterDisplay() {
  const counter = useCounter();

  return (
    <p className="text-muted-foreground">
      현재 카운터 값: {counter}
    </p>
  );
}

