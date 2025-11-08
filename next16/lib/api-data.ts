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
  // 서버 컴포넌트에서는 같은 서버의 API를 호출하므로 상대 경로 사용
  // 클라이언트에서 호출하는 경우를 위해 절대 URL도 지원
  const baseUrl = 
    typeof window === 'undefined' 
      ? process.env.NEXT_PUBLIC_BASE_URL || '' // 서버 사이드: 상대 경로 또는 환경 변수
      : process.env.NEXT_PUBLIC_BASE_URL || window.location.origin; // 클라이언트 사이드: 현재 origin 사용
  
  const url = `${baseUrl}/api/data`;
  const response = await fetch(url, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  
  return response.json();
}

