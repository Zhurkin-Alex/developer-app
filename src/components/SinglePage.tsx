import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';


function SinglePage() {
    const [postItem, setPostItem] = useState<Provider>()
    const {id} = useParams()
    interface Provider {
        title: string;
        body: string;
    }

    const navigate = useNavigate()
    const goback = () => navigate(-1)
    const goHome = () => navigate(`/`, {replace: true})

  

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>res.json())
            .then(data=>setPostItem(data))
    }, [id])

    if (!postItem) {
        return <div>Preload</div>
    }

    return (
        <div>
            <button onClick={goback}>Go back</button>
            {/* bad practic */}
            <button onClick={goHome}>Go home</button>
            {postItem &&
                <>
                    <h1>{postItem.title}</h1>
                    <p>{postItem.body}</p>
                    <p> <Link to={`/posts/${id}/edit`}>edit post {id}</Link></p>
                </>
            }
        </div>
    );
}

export { SinglePage };