const promise = new Promise((resolve, reject) => {
    // async task
    setTimeout(() => {
        let err = false;
        if (err) {
            console.log('I am complete!');
            resolve({message: 'Completed promise resolved!'});
        }
        else {
            reject({message: 'Something went wrong!!'});
        }
    }, 1000);
});
// then - promise gets resolved
promise
.then((msg) => { // associated with resolve()
    console.log(`${msg.message} - Completed promise consumed!`);
})
.catch((err) => { // associated with reject
    console.log(err);
})
.finally(() => {
    console.log('Promise is finished!');
})
