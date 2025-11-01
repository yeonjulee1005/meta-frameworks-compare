'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCounter } from '@/lib/counter-store';
import { useState, useEffect } from 'react';

interface ApiData {
  message: string;
  timestamp: string;
  data: Array<{
    id: number;
    name: string;
    value: number;
  }>;
}

export default function DataPage() {
  const counter = useCounter();
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/data');
      if (!response.ok) throw new Error('데이터를 불러오는데 실패했습니다');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('알 수 없는 오류'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">데이터</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            현재 카운터 값: {counter}
          </p>
          {loading && (
            <div className="text-muted-foreground">데이터를 불러오는 중...</div>
          )}
          {error && (
            <div className="text-destructive">에러: {error.message}</div>
          )}
          {data && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">서버 데이터:</h2>
              <pre className="bg-muted p-4 rounded-md overflow-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          )}
          <Button onClick={fetchData} disabled={loading}>
            {loading ? '로딩 중...' : '새로고침'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
