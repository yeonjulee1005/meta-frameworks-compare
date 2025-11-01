'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCounter, useCounterActions } from '@/lib/counter-store';

export default function CounterPage() {
  const counter = useCounter();
  const { increment, decrement, reset } = useCounterActions();

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">카운터</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            현재 카운터 값:{' '}
            {counter}
          </p>
          <div className="flex gap-4">
            <Button onClick={increment}>증가</Button>
            <Button onClick={decrement} variant="destructive">
              감소
            </Button>
            <Button onClick={reset} variant="outline">
              초기화
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
