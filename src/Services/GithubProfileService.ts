class GithubProfileService {
    username: string;
    data: any;
    promise: Promise<any>;

    constructor(username: string) {
        this.username = username;
        this.data = undefined;
    }

    getData() {
        if (!this.promise)
            this.promise = new Promise((resolve: (value: any) => void, reject) => {
                if (this.data)
                    resolve(this.data)

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
        return this.promise
    }
}

export const githubProfile = new GithubProfileService("goorkamateusz")
