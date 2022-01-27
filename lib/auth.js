import auth from '@react-native-firebase/auth';

export const signInF = ({email, password}) => auth().signInWithEmailAndPassword(email, password)


// export const signUp = ({ email, password }) => auth().createUserWithEmailAndPassword(email, password);

export function signUp({ email, password }) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export const subscribeAuth = (callback) => {
  return auth().onAuthStateChanged(callback)
}

export const signOut = () => {
  return auth().signOut();
}