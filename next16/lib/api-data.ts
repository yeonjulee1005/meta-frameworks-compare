export interface ApiData {
  message: string;
  timestamp: string;
  data: Array<{
    id: number;
    name: string;
    value: number;
  }>;
}

// API 엔드포인트를 호출하여 데이터 가져오기
export async function getApiData(): Promise<ApiData> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3008';
  const response = await fetch(`${baseUrl}/api/data`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  
  return response.json();
}

