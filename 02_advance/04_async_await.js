const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        if (!err) {
            resolve('resolved');
        }
        else {
            reject('rejected');
        }
    }, 1000);
});

async function consumePromise() {
    try {
        const resp = await promise; // awaits for the response to come
        console.log(resp);   
    } catch (error) {
        console.log('Error!');
    }
};

consumePromise();
