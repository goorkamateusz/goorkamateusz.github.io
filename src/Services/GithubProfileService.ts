class GithubProfileService {
    username: string;
    data: any;

    constructor(username: string) {
        this.username = username;
        this.data = undefined;
    }

    getData() {
        return new Promise((resolve: (value: any) => void, reject) => {
            if (this.data)
                resolve(this.data)

            console.log("fetching")

            fetch("https://api.github.com/users/" + this.username)
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
    }
}

export const githubProfile = new GithubProfileService("goorkamateusz")
