'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/Modal';
import { useCounter } from '@/lib/counter-store';
import { useState } from 'react';

export default function Home() {
  const counter = useCounter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">홈</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            현재 카운터 값: {counter}
          </p>
          <div className="flex gap-4">
            <Button onClick={() => setIsModalOpen(true)}>모달 열기</Button>
          </div>
        </CardContent>
      </Card>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
