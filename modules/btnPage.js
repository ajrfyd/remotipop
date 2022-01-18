const BTN_ONE = 'pages/BTN_ONE';
const BTN_TWO = 'pages/BTN_TWO';
const BTN_THREE = 'pages/BTN_THREE';
const BTN_FOUR = 'pages/BTN_FOUR';


// const BTN_

// export const pageBTN = (type) => dispatch =>{
//   dispatch({ type: `BTN_${type}` })
// }

const initialState = {
  pages: {
    1: true,
    2: false,
    3: false,
    4: false
  }
}

export default function btnPage(state = initialState, action) {
  switch(action.type) {
    case BTN_ONE:
      return {
        ...state,
        pages: {
          1: true,
          2: false,
          3: false,
          4: false
        }
      }
    case BTN_TWO:
      return {
        ...state,
        pages: {
          1: false,
          2: true,
          3: false,
          4: false
        }
      }
    case BTN_THREE:
      return {
        ...state,
        pages: {
          1: false,
          2: false,
          3: true,
          4: false
        }
      }
    case BTN_FOUR:
      return {
        ...state,
        pages: {
          1: false,
          2: false,
          3: false,
          4: true
        }
      }
    default:
      return state
  }
}