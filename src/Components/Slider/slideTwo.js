import React from "react";

const SlideTwo = (props) => {
    let background = {
        backgroundImage: 'url(./img/About2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}

export default SlideTwo;