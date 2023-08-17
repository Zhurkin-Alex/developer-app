import {createContext, useEffect, useState, useCallback} from 'react';
import storageService from '../services/storageService'
export const AuthContext:any = createContext(null)

export const AuthProvider = ({children}:any) => {
    const [email, setEmail] = useState('string')
    // console.log('user-', user)

    useEffect(()=>{
        const user: string = storageService.get('email') || ''
        return setEmail(user);
    },[email])

    const signIn = (newUser:'string', cb:any)=>{
        setEmail(newUser)
        storageService.set('email', newUser);
        cb()
    }
    const signOut = useCallback((cb:any)=>{
        setEmail('')
        storageService.clear('email');
        cb()
    }, [])

    const value = {email, signIn, signOut}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}