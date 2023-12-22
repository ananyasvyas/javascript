// XMLHttpRequest
/*
Value	State	Description
0	    UNSENT	Client has been created. open() not called yet.
1	    OPENED	open() has been called.
2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	    LOADING	Downloading; responseText holds partial data.
4	    DONE	The operation is complete.
*/
const url = 'https://api.github.com/users/ananyasvyas'
const xhr = new XMLHttpRequest();
// open - sends http request
xhr.open('GET', url);
// check state at every stage of request
xhr.onreadystatechange = function () {
    console.log(xhr.readyState); // 2 3 4
    if (xhr.readyState === 4) {
        // response text is the response from the api
        console.log(this.responseText); // string
        const data = JSON.parse(this.responseText); // convert to json object
        console.log(data.followers); // 0
    }
}
xhr.send(); // send http request