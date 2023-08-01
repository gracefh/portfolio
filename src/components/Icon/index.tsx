import React from 'react';
import Styles from './styles.module.css';

type IconProps = {
    iconClassName: string;
    link: string;
}
export const Icon = ({iconClassName, link}: IconProps) => {
    return (
        <a target="/blank" href={`${link}`} className={Styles.icon}>
            <i className={`link-background ${iconClassName}`}></i>
            <i className={iconClassName}></i>
        </a>
    )
}