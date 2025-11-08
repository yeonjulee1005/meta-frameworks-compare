export default defineEventHandler(async () => {
  // 시뮬레이션을 위한 약간의 지연
  // await new Promise(resolve => setTimeout(resolve, 500));

  return {
    message: '서버에서 가져온 데이터입니다',
    timestamp: new Date().toISOString(),
    data: [
      { id: 1, name: '아이템 1', value: 100 },
      { id: 2, name: '아이템 2', value: 200 },
      { id: 3, name: '아이템 3', value: 300 },
    ],
  };
});
