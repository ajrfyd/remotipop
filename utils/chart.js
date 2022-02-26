export const makeChartData = (data) => {
  let emotions = [];
  const color = ['red', 'orange', 'yellow', 'green', 'dodgerblue','#041F7D', 'purple', 'pink', '#ddd', '#00ff37'];

  // 랜덤 색상 추출 
  const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

  // console.log(data, 'datadadadadtatdtadtadtatdtadtadtadtadtadt')
  // 받은 감정으로 차트 데이터 생성
  let id = 0;
  for(let key in data) {
    // if(higher < data[key]) higher = data[key];
    const item = {
      key: id++,
      value: data[key],
      svg: { fill: `${randomColor()}` },
      arc: null,
      // isHigh: false
      emotion: key
    }
    emotions.push(item)
  }
  
  
  // 높은 점수 찾기
  let highScore = Number.MIN_SAFE_INTEGER;
  let index = 0;
  
  emotions.forEach((item, idx) => {
    if(highScore < item.value) {
      highScore = item.value;
      index = idx
    }
  })

  const higherScoreStyle = { 
    outerRadius: '130%', cornerRadius: 10 
  }

  emotions.forEach((item, idx) => {
    if(idx === index) {
      item.arc = higherScoreStyle;
    }
  })
  // emotions[index].arc = higherScoreStyle;

  // 높은 점수를 가진 것들의 존재 여부 확인
  let tmp = []
  emotions.filter(item => {
    item.value === emotions[index].value
  }).forEach((_, idx) => tmp.push(idx))

  if(tmp.length !== 0) {
    tmp.forEach(item => emotions[item].arc = higherScoreStyle)
    return emotions
  }


  return emotions;
}


// arc: { outerRadius: '120%', cornerRadius: 10 },
