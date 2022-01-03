import React from 'react'

function Error(error) {
    return (
        <div style={{fontSize:16, padding:15}}>
            {error.message}
        </div>
    )
}

export default Error
