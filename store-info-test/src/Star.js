import React, {useState, useEffect} from 'react';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Star = (props) => {
    const [rating, setRating] = useState(props.data)
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        setRating(0);
        setHoverRating(0);
    }, [props.data])

    const onMouseEnter = (e) => {
        setHoverRating(e.target.id);
    };
    const onMouseLeave = () => {
        setHoverRating(rating);
    };
    const onSaveRating = () => {
        setRating(hoverRating);
        props.onSaveRating(hoverRating);
    };

    const starRating = [];
    
    for(var i = 1; i <= 5; i++){
        if(i > hoverRating)
            starRating.push(<StarBorderIcon id={i} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onSaveRating}/>);
        else
            starRating.push(<StarIcon id={i} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onSaveRating}/>);
    }

    return(
        <div>
            {starRating}
        </div>
    );
}

export default Star;

