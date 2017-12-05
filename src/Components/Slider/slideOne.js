import React from "react";
import img01 from './about.jpg'

const SlideOne = (props) => {
    let background = {
        backgroundImage: 'url(./about.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}

export default SlideOne;