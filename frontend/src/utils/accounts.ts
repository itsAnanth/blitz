import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import type { Auth } from 'firebase/auth';

class Accounts {

    static async update(username: string) {
        const auth: Auth = getAuth();
    
        const user = auth.currentUser;
    
        if (!user) return console.log('Auth user update error, not signed in');
    
        try {
            await updateProfile(user, { displayName: username })
        } catch(e) {
            console.log('Auth user update error');
            console.log(e); 
            // @ts-ignore
            return e.code;
        }
    
        return true;
    }


    static async signUp(username: string, email: string, password: string) {
        const auth: Auth = getAuth();
        let result;
        try {
            result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName: username });
        } catch(e) {
            console.log('Auth signup error');
            console.log(e);
            return { error: true, detail: (e as any).code };
        }
    
        const user = result.user;

        return { error: false, detail: user };
    }


    static async signIn(email: string, password: string) {
        const auth: Auth = getAuth();
        let result;
        try {
            result = await signInWithEmailAndPassword(auth, email, password);
        } catch(e) {
            console.log('Auth signin error');
            console.log();
            
            return { error: true, detail: (e as any).code };
        }
    
        const user = result.user;
    
        return { error: false, detail: user };
    }

    static async signOut() {
        const auth: Auth = getAuth();
        try {
            await signOut(auth);
        } catch(e) {
            console.log('Auth signout error');
            console.log(e);
        }
    }

}



export default Accounts;