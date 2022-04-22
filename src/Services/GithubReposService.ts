import { githubProfile } from "./GithubProfileService";
import ApiService from "./ApiService";

class GithubReposService extends ApiService {
    protected loadData(resolve: (value: any) => void, reject: (reason?: any) => void) {
        githubProfile.getData()
            .then((data) => {
                fetch(data["repos_url"])
                    .then((response: Response) => this.setData(response, resolve, reject))
                    .catch((reason) => reject(reason));
            })
            .catch((reason) => reject(reason))
    }
}

export const githubRepos = new GithubReposService()
