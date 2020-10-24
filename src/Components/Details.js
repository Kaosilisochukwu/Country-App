import React from 'react'

const Details = ({country}) => {
    return (
        <div>
            <div>
                <img src={country.flag} alt={`${country.name} flag`}/>
            </div>
            <div></div>
        </div>
    )
}

export default Details
