/*
The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.

A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

fetch() tasks are executed in Micro task queue/priority queue/fetch queue
*/

fetch('https://api.github.com/users/ananyasvyas')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((err) => console.log(err));

/*
response = fetch ('');

Fetch works in two phases -
1. Reserves space, say 'x', in memory for response -
onFulfiled[]
onRejection[]
2. Executes network request with the help of browser/node

If network request response is success, fn gets inserted into onFulfiled which inturn is resolve(), otherwise in on Rejection, which is reject().
It is the duty of 'x' to fulfil the response in global memory.


*/