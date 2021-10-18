import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={ {
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://picsum.photos/200)'
                } }
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    fadsfasdsdf
                </p>
                <p className="journal__entry-content">
                    dfafasdfadsfffffffffffffffffffffffffffffffffff

                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Lunes</span>
                <h4>18</h4>
            </div>

        </div>
    )
}
