import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Score = (props) => {
    const score = props.data;
    const starList = score.map( 
        (num, index) => num === 1? <StarIcon></StarIcon> : (num === 0.5? <StarHalfIcon></StarHalfIcon> : <StarBorderIcon></StarBorderIcon>)
        );
    return(
        <div>
            {starList}
        </div>
    );
}

Score.defaultProps = {
    score: [0,0,0,0,0]
};

export default Score;