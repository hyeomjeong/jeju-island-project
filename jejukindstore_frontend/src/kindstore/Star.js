import React, {useState, useEffect} from 'react';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Star = (props) => {
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        setRating(props.data);
        setHoverRating(props.data);
    }, [props.data])

    const onMouseEnter = (e) => {
        setHoverRating(e.target.id);
    };
    const onMouseLeave = () => {
        setHoverRating(rating);
    };
    const onSaveRating = () => {
        props.onSaveRating(hoverRating);
        setRating(hoverRating);
    };
    
    const starRating = [];
    
    for(var i = 1; i <= 5; i++){
        if(i > hoverRating)
            starRating.push(<StarBorderIcon key={i} id={i} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onSaveRating}/>);
        else
            starRating.push(<StarIcon key={i} id={i} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onSaveRating}/>);
    }

    return(
        <div>
            {starRating}
        </div>
    );
}

export default Star;

