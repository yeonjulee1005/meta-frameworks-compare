import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshButton } from './RefreshButton';
import { CounterDisplay } from './CounterDisplay';
import { getApiData, type ApiData } from '@/lib/api-data';

export default async function DataPage() {
  let data: ApiData | null = null;
  let error: Error | null = null;

  try {
    data = await getApiData();
  } catch (err) {
    error = err instanceof Error ? err : new Error('알 수 없는 오류');
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">데이터</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CounterDisplay />
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
          <RefreshButton />
        </CardContent>
      </Card>
    </div>
  );
}
