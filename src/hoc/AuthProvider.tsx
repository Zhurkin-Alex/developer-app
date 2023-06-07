import {createContext, useEffect, useState} from 'react';
import storageService from '../services/storageService'
export const AuthContext:any = createContext(null)

export const AuthProvider = ({children}:any) => {
    const [user, setUser] = useState('string')
    // console.log('user-', user)

    useEffect(()=>{
        const user: string = storageService.get('user') || ''
        return setUser(user);
    },[user])

    const signIn = (newUser:'string', cb:any)=>{
        setUser(newUser)
        storageService.set('user', newUser);
        cb()
    }
    const signOut = (cb:any)=>{
        setUser('')
        storageService.clear('user');
        cb()
    }

    const value = {user, signIn, signOut}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}