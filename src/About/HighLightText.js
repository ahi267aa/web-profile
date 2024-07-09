import React from 'react'

const HighLightText = ({t , color = 'rgb(101, 103, 104)'}) => {
    const highLightText = {
        color : color,
        fontWeight : "bold",
        zoom : 1
        // fontWeight : "blod"
    }
    return (
    <a style={highLightText}>{t}</a>
  )
}

export default HighLightText