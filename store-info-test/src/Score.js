import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Score = (props) => {
    var score = props.data;
    
    const list = [];
    
    for (var i = 0; i < 5; i++){
        if (score === 0){
            list.push(<StarBorderIcon></StarBorderIcon>);
        }
           
        else if(score === 0.5){
            list.push(<StarHalfIcon></StarHalfIcon>);
            score = 0;
        }
        else{
            //console.log(score);
            list.push(<StarIcon></StarIcon>);
            score = score - 1;
        }
        
    }
    return(
        <div>
            {list}
        </div>
    );
}

Score.defaultProps = {
    score: 0
};

export default Score;