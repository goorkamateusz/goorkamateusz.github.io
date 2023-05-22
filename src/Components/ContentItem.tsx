import * as React from "react";
import './ContentItem.css'

export type ContentItemProps = {
  href: string;
  name: string;
  desc?: string;
  tags?: string[];
  icon?: any;
  className?: string;
};

export default function ContentItem(props: ContentItemProps) {
  return <a className={`cnt-item ${props.className}`} href={props.href}>
            {props.icon}
            <div className="name">{props.name}</div>
            <div className="description">{props.desc}</div>
            {props.tags?.map(t => <div className="language">{t}</div>)}
        </a>;
}
