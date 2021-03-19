import React from 'react';
import UseFirestore from '../hooks/UseFirestore';

const ImageGrid = ({ setSelectedImg}) => {
    const { docs } = UseFirestore('images')
    return(
        <div className="img_grid">
            { docs && docs.map(doc => (
                <div className="img_wrap" key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                    <img src={doc.url} alt="left _ upload" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;