import React, {useState, useEffect} from 'react';

function LinearAlgebraCompute() {
    const [post, setPost] = useState(null);
    const [expr, setExpr] = useState("")

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({expression: expr})
        };
        fetch('http://127.0.0.1:8000/api/compute/', requestOptions)
        .then(response => response.json()).then(data => setPost(data.expression));
    },[expr])

    return (
            <div className='SearchedPapers'>
                <label>
                    Enter Linear Algebra Expression
                </label>
                <input type='text' onChange={e => setExpr(e.target.value)}/>
                <div>
                    <h5>Vector: {post}</h5>
                </div>
                    
    
            </div>
        
    )
}

export default LinearAlgebraCompute;