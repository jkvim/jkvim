import React from 'react'
import './Link.css'

interface LinkProps {
    label: string
}

export default (props: LinkProps) => {
    return (
        <a className="link">{props.label}</a>
    )
}