// Action types
export const SIGN_IN = 'status/SIGN_IN';
export const SIGN_OUT = 'status/SIGN_OUT';


// Action creators
export const signIn = () => {
    return{
        type: SIGN_IN,
    }
};

export const signOut = () => {
    return{
        type: SIGN_OUT,
    }
};