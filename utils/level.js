export const levelMaker = (level) => {
  const arr = [];
  for(let i = 0; i < level; i++) {
    arr.push(i)
  }
  return arr;
}