import { githubProfile } from "./GithubProfileService";

class GithubReposService {
    data: any;

    constructor() {
        this.data = undefined;
    }

    getData() {
        return new Promise((resolve: (value: any) => void, reject) => {
            if (this.data)
                return this.data

            githubProfile.getData().then((data) => {
                fetch(data["repos_url"])
                    .then((response: Response) => {
                        if (response.ok) {
                            this.data = response.json()
                            resolve(this.data)
                        }
                        else {
                            reject(response)
                        }
                    })
                    .catch((reason) => reject(reason))
            })
        })
    }
}

export const githubRepos = new GithubReposService()
