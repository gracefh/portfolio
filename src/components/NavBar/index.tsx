import React from 'react';
import Styles from './styles.module.css';

type NavBarItemProps = {
    name: string
}

export const NavBarItem = (props: NavBarItemProps) => {
    return (
        <a href="/" className={Styles.navBarItem}>
            <div className={"link-background"}>{props.name}</div>
            <div>{props.name}</div>
        </a>
    )
}

export const NavBar = () => {
    return (
        <div className={Styles.navBar}>
            <h1 className={Styles.title}>GH</h1>
            <div className={Styles.navBarItems}>
                <NavBarItem name="projects"/>
                <NavBarItem name="fun"/>
                <NavBarItem name="about"/>
                <NavBarItem name="resume"/>
            </div>
        </div>
    )
}