import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Loading = () => {
    return (
        <div className="m-5 p-5 d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading