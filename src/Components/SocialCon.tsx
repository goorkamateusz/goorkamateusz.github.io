import * as React from "react";
import './SocialCon.css'

export function SocialCon(props: any) {
    return <div className="socialCon">
        {props.children}
    </div>;
}
