import ApiService from "./ApiService";

class GithubProfileService extends ApiService {
    constructor(username: string) {
        super()
        this.endpoint = "https://api.github.com/users/" + username
    }
}

export const githubProfile = new GithubProfileService("goorkamateusz")
