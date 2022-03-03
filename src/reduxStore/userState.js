import { fetchUser } from "../fetchData";

export const SIGN_IN_ACTION = "mymusicstore.com/signIn";

export const SIGN_OUT_ACTION = "mymusicstore.com/signOut";

export const userReducer = (state = null, action) => {

  if(action.type === SIGN_IN_ACTION){
    return action.payload.userData;
  }
  
  if(action.type === SIGN_OUT_ACTION){
    return null;
  }

  return state;
};

export const signInActionCreator = () => async (dispatch, getState) => {

  try {
    const userData = await fetchUser('fake@user.com', '123');
  
    dispatch({
      type: SIGN_IN_ACTION,
      payload: {
        userData: userData,
      }
    });
  } catch(error){
    console.log('there was an error')
  }
};
