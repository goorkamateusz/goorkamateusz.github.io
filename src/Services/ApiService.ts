export default abstract class ApiService {
    promise: Promise<any>;
    data: any;

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

    protected abstract loadData(resolve: (value: any) => void, reject: (reason?: any) => void): void;

    protected setData(response: Response, resolve: (value: any) => void, reject: (reason?: any) => void) {
        if (response.ok) {
            this.data = response.json();
            resolve(this.data);
        }
        else {
            reject(response);
        }
    }
}