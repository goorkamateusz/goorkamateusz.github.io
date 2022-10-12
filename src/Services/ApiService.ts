export default abstract class ApiService {
    promise: Promise<any>;
    data: any;
    endpoint: string

    getData(): Promise<any> {
        if (!this.promise) {
            this.promise = new Promise((resolve: (value: any) => void, reject) => {
                if (this.data)
                    resolve(this.data)

                this.loadData(resolve, reject);
            })
        }
        return this.promise
    }

    protected loadData(resolve: (value: any) => void, reject: (reason?: any) => void): void {
        if (this.endpoint)
            fetch(this.endpoint)
                .then((response: Response) => this.setData(response, resolve, reject))
                .catch((reason) => reject(reason));
    }

    protected processData(response: Response): any {
        return response.json()
    }

    protected setData(response: Response, resolve: (value: any) => void, reject: (reason?: any) => void) {
        if (response.ok) {
            this.data = this.processData(response);
            resolve(this.data);
        }
        else {
            reject(response);
        }
    }
}