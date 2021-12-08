import * as React from 'react'
import { Link } from 'gatsby'
import {container,heading,navLinks,navLinkItem,navLinkText} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = (props) => {
    const pageTitle=props.pageTitle
    const children=props.children
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>go to home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>go to about</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>
                    {pageTitle}
                </h1>
                {children}
                <StaticImage 
                    src="../images/icon.png" 
                    alt="dinosaur"
                    placeholder="blurred"
                    layout="fixed"
                    width={200}
                    height={200}/>
            </main>
        </div>
    )
}


export default Layout