import * as React from "react";
import './ContentItem.css'

export type ContentItemProps = {
  href: string;
  name: string;
  desc?: string;
  tags?: string[];
  icon?: any;
  className?: string;
  banner?: string;
};

export default function ContentItem(props: ContentItemProps) {
  return <a className={`cnt-item ${props.className}`} href={props.href}>
    {props.icon}
    <div className="name">{props.name}</div>
    <div className="description">{props.desc}</div>
    <div className="tags">
      {props.tags?.map(t => <div>{t}</div>)}
    </div>
    {props.banner && <div className="banner" style={{ backgroundImage: `url('` + props.banner + `')` }}></div>}
  </a>;
}
