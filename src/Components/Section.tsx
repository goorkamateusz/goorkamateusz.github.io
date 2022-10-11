import * as React from "react";
import './Section.css'

interface SectionProps {
    className?: string
    name?: string | React.ReactNode
    children?: React.ReactNode
}

export function Section(props: SectionProps) {
    return (
        <section className={props.className}>
            <header>
                {props.name}
            </header>
            <main>
                {props.children}
            </main>
        </section>
    );
}
