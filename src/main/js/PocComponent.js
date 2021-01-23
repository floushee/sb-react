import React, { useEffect, useState } from 'react'

function PocComponent(){

    const [message, setMessage] = useState(null);

    useEffect(() => {
        fetch('/api/message')
            .then((res) => res.text())
            .then((message) => {
                setMessage(message)
            });
    })

    return (
        <div>
            {message}
        </div>
    )
}

export default PocComponent;
