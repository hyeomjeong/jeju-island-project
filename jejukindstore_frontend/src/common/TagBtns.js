import React, {useState, useEffect} from 'react';

const TagBtns = (props) => {
    const [tags, setTags] = useState(props.data);

    useEffect(() => {
        setTags(props.data);
    }, [props.data]);

    //console.log(props.data);

    const removeTag = (name) => {
        props.removeTag(name);
        setTags(props.data);
        console.log(tags);
        console.log(props.data);
    }

    const list = tags.map((info, index) => 
        <button name={info} key={index} onClick={() => removeTag(info)} >#{info}</button>
    );
    return(
        <div className="tag-box">
            {list}
        </div>
        );
}

export default TagBtns;
