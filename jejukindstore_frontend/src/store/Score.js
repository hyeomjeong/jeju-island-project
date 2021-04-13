import React from 'react';

const Score = (props) => {
    var score = props.data;
    
    const list = [];
    for (var i = 0; i < 5; i++){
        if (score === 0){
            list.push(<i class={props.font}>star_outline</i>);
        }
           
        else if(score === 0.5){
            list.push(<i class={props.font}>star_half</i>);
            score = 0;
        }
        else{
            //console.log(score);
            list.push(<i class={props.font}>star</i>);
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