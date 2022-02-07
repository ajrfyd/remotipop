export const explain = [
  '저를 터치해 보실래요??👅',
  '위의 박을 눌러 그날의 감정을 기록할 수 \n있어요..',
  '왼쪽 박은 긍정적인 하루를 기록할 수 \n있어요!',
  '오른쪽 박은 조금 지치고 힘든 날을 기록할 수 있어요..',
]

export const controller = (num) => {
  num += 1;
  if(num === explain.length) {
    return 0;
  }
  return num;
}

export const userInfo = {
  username: 'ajrfyd',
  email: 'ajrfyd@naver.com',
}