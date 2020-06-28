import React from 'react'

import './Layout.css'

interface LayoutProps {
    header: React.ReactElement,
    body: React.ReactElement,
    footer: React.ReactElement
}

export default (props: LayoutProps) => {
    return (
      <div className="layout">
        <div className="layout__header">{props.header}</div>
        <div className="layout__body">{props.body}</div>
        <div className="layout__footer">{props.footer}</div>
      </div>
    );
}