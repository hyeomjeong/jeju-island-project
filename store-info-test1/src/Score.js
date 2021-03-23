import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Score = (props) => {
    const [ score, setScore ] = useState(props);

    return(
        <div>
            {score - 1 >= 0 || <StarIcon></StarIcon>}
            {score === 0.5 || <StarHalfIcon></StarHalfIcon>}
            {score === 0 || <StarBorderIcon></StarBorderIcon>}
            setScore(score = score-1);
        </div>
    );
}

Score.defaultProps = {
    score: 0
};

export default Score;