const userInfo = {
  email: 'ajrfyd@naver.com',
  paassword: 'gksrmf12',
  nickname: 'ajrfyd'
}
export const sendInfo = () => {
  setTimeout(() => {
    console.log('called')
    return userInfo;
  }, 1000)
}