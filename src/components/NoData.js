import React from 'react';


export default function NoData() {
    return (
        <div className="no-data-found">
            <div className="text-center">
                <p>No Recipe Found</p>
                <a className="btn btn-danger" href="./">To Top</a>
            </div>
        </div>
    );
}