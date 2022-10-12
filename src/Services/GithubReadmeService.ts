import ApiService from "./ApiService";
import { marked } from 'marked';

export class Readme {
    brief: string[];

    constructor(readme: string) {
        const brief = readme
            .match(/<!--brief-->(.*)<!--\/brief-->/sg).map(b =>
                b.replace(/<!--ignore-->(.*)<!--\/ignore-->/sg, '')
            )
        this.brief = brief.map(b => marked.parse(b))
    }
}

class GithubReadmeService extends ApiService {
    constructor(username: string) {
        super()
        this.endpoint = "https://raw.githubusercontent.com/" + username + "/" + username + "/master/README.md"
    }

    protected processData(response: Response) {
        return response.text()
    }
}

export const githubReadme = new GithubReadmeService("goorkamateusz")
