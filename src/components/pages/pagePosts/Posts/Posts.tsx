// import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../../../hook/useAuth';
import BlogFilters from '../BlogFilters/BlogFilters';

interface Posts {
    id: number,
    userId: number,
    title: string,
}

function Posts():any {
    // const [postItem, setPosts] = useState([])
    const postItem = useLoaderData() as Posts[]
    // console.warn('postItems', postItems)
    const {signOut} = useAuth()
    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    const postQuery = searchParams.get('post') || ''
    //URL.ru/poasts?post=abs (abs)

    const latest = searchParams.has('latest') //true or false
    const startFrom = latest ? 80 : 1


    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res=>res.json())
    //         .then(data=>setPosts(data))
    // }, [])



    return (
        <div>
            <button onClick={()=> signOut(()=>navigate('/', {replace:true}))}>Log Out</button>
            <h1>Our news</h1>
            <BlogFilters postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>
            {
                postItem.filter((post: {id: number; title: string | string[]; })=>post.title.includes(postQuery) && post.id >= startFrom)
                    .map( (el:any) =>(
                        <Link key={el.id} to={`/posts/${el.id}`}>
                            <li>{el.title}</li>
                        </Link>
                    ))
            }
        </div>
    );
}

const blogLoader = async () => {
    // console.log({reqest, params})
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    return res.json()
        
}

export  {Posts, blogLoader};