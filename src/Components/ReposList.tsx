import * as React from "react";
import { githubRepos } from "Services/GithubReposService";
import { Repo, RepoData } from "./Repo";
import './ContentItem.css'


export default function ReposList() {
    const [repos, setRepos]: [RepoData[], any] = React.useState(undefined)

    const isStarred = (repo: RepoData) => repo.stargazers_count > 0
    const sortRule = (a: RepoData, b: RepoData) => b.stargazers_count - a.stargazers_count || b.pushed_at - a.pushed_at

    if (!repos)
        githubRepos.getData().then((value) => setRepos(value.filter(isStarred).sort(sortRule)))

    return (
        <div className="cnt-list">
            {repos && repos.filter(((_, i) => i < 7)).map((repo: RepoData, i: number) => <Repo key={i} repo={repo} />)}
            <a className="cnt-item" href="https://github.com/goorkamateusz?tab=repositories">
                <div id="language">See all repositories...</div>
            </a>
        </div >
    )
}