import React from 'react';

const Model = ({selectedImg , setSelectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop'))
        setSelectedImg(null)
    }

    return(
        <div className="backdrop" onClick={handleClick} >
            <img src={selectedImg} alt="enlarged_pic" />
        </div>
    )
}

export default Model;