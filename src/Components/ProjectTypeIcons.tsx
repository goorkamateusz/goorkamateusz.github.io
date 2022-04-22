import * as React from "react";
import smartphone from 'Img/smartphone.svg'
import unity from 'Img/unity.svg'


type ProjectTypesIconsProps = { src: string }

export default function ProjectTypeIcon(props: ProjectTypesIconsProps) {
    return <img className="addition-icon" src={props.src} />;
}

export const Smartphone = () => <ProjectTypeIcon src={smartphone} />
export const Unity = () => <ProjectTypeIcon src={unity} />