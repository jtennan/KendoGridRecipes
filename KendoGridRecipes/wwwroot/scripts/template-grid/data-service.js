class DataService {

    static async run(url) {
        const response = await fetch(url, { method: 'GET', cache: 'no-cache' });

        if (response.status !== 200) {
            throw 'Data service failed'
        }

        return await response.json();
    }
}

export { DataService }