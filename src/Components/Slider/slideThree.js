import React from "react";

const SlideThree = (props) => {
    let background = {
        backgroundImage: 'url(./img/edu.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}

export default SlideThree;