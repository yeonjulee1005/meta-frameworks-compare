import { headers } from 'next/headers';

export interface ApiData {
  message: string;
  timestamp: string;
  data: Array<{
    id: number;
    name: string;
    value: number;
  }>;
}

// 서버 사이드에서 API를 호출할 때 사용하는 base URL 가져오기
async function getBaseUrl(): Promise<string> {
  // 클라이언트 사이드
  if (typeof window !== 'undefined') {
    return process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
  }

  // 서버 사이드: headers()를 사용하여 호스트 정보 가져오기
  try {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    
    if (host) {
      return `${protocol}://${host}`;
    }
  } catch {
    // headers()가 사용 불가능한 경우 (예: 빌드 타임)
  }

  // 환경 변수 또는 기본값 사용
  return (
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.VERCEL_URL ||
    `http://localhost:${process.env.PORT || 3008}`
  );
}

// API 엔드포인트를 호출하여 데이터 가져오기
export async function getApiData(): Promise<ApiData> {
  const baseUrl = await getBaseUrl();
  const url = `${baseUrl}/api/data`;
  
  const response = await fetch(url, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  
  return response.json();
}

