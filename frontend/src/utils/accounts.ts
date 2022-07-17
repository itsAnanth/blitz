import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import type { Auth } from 'firebase/auth';

async function UpdateUser(username: string) {
    const auth: Auth = getAuth();

    const user = auth.currentUser;

    if (!user) return console.log('Auth user update error, not signed in');

    try {
        await updateProfile(user, { displayName: username })
    } catch(e) {
        console.log('Auth user update error');
        console.log(e);
        return false;
    }

    console.log('update success')
    return true;
}

async function SignUp(username: string, email: string, password: string) {
    const auth: Auth = getAuth();
    let result;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, { displayName: username });
    } catch(e) {
        console.log('Auth signup error');
        console.log(e);
        return null;
    }

    const user = result.user;

    console.log('signup', user);
    return user;
}

async function SignIn(email: string, password: string) {
    const auth: Auth = getAuth();
    let result;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch(e) {
        console.log('Auth signin error');
        console.log(e);
        return null;
    }

    const user = result.user;

    console.log('signin', user);
    return user;
}

async function SignOut() {
    const auth: Auth = getAuth();
    try {
        await signOut(auth);
    } catch(e) {
        console.log('Auth signout error');
        console.log(e);
    }
}

export { SignIn, SignOut, SignUp, UpdateUser };