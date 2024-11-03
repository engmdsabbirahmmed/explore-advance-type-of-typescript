{
    //create promise
    type nameInfo = { name: string }
    const createPromise = (): Promise<nameInfo> => {
        return new Promise<nameInfo>((resolve, reject) => {
            const data = { name: 'md. sabbir' };
            if (data) {
                resolve(data)
            }
            else {
                reject('Failed to load data')
            }
        })
    }

    // calling promise 
    const showData = async (): Promise<nameInfo> => {
        const data: nameInfo = await createPromise();
        return data;
    }
}