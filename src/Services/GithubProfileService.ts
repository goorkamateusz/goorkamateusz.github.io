import ApiService from "./ApiService";

class GithubProfileService extends ApiService {
    username: string;

    constructor(username: string) {
        super()
        this.username = username;
    }

    protected loadData(resolve: (value: any) => void, reject: (reason?: any) => void) {
        fetch("https://api.github.com/users/" + this.username)
            .then((response: Response) => this.setData(response, resolve, reject))
            .catch((reason) => reject(reason));
    }
}

export const githubProfile = new GithubProfileService("goorkamateusz")
