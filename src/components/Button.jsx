import React from 'react'
import PropTypes from 'prop-types'

//componente funcional

const Button = ({type, text, clickHandler}) => (
        <button className = {type} onClick={() =>
            // console.log("onClick en el Button")
            clickHandler(text)
        }>
            <span>{text}</span>
        </button>
)
//validaciones 
Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}
export default Button