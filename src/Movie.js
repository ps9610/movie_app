import React from "react";
import PropTypes from "prop-types"

//state가 필요 없기 때문에 Class Component 아니고 function Component 사용

function Movie ({id, year, title, summary, poster}){
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;