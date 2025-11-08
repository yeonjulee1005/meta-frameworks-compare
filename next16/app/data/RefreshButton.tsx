'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function RefreshButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRefresh = async () => {
    setLoading(true);
    router.refresh();
    // router.refresh()는 비동기적으로 작동하지 않으므로 약간의 지연 추가
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <Button onClick={handleRefresh} disabled={loading}>
      {loading ? '로딩 중...' : '새로고침'}
    </Button>
  );
}

