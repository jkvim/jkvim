import React from 'react'
import Link from '../routes/Link'
import './NavBar.css'

export default () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">JKVIM™</div>
            <div className="navbar__links">
                <Link label="快捷键清单" />
                <Link label="在线练习列表" />
            </div>
        </div>
    )
}