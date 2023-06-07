import React from 'react';
import { useParams } from 'react-router-dom';

function EditPost() {
    const {id} = useParams()
    return (
        <div>
            Edit post {id}
        </div>
    );
}

export default EditPost;