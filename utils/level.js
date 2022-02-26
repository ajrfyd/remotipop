// 캘린더 >> 게시글의 감정 레벨 생성 함수

export const levelMaker = (level) => {
  const arr = [];
  for(let i = 0; i < level; i++) {
    arr.push(i)
  }
  return arr;
}