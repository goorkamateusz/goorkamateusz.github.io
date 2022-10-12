import * as React from "react";
import './GithubReadme.css'
import { githubReadme, Readme } from "Services/GithubReadmeService";

export function GithubReadme() {
    const [readme, setReadme]: [Readme, any] = React.useState(undefined)

    if (readme == undefined)
        githubReadme.getData().then((value) => setReadme(new Readme(value)))

    return readme && <div className="githubReadme">
        {readme.brief.map((content, i) =>
            <div key={i} dangerouslySetInnerHTML={{ __html: content }} />)}
    </div>
}
