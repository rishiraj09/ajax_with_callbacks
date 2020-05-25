const http = new easyHTTP;

// GET Posts
http.get('http://jsonplaceholder.typicode.com/posts',
    function (err, posts) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(posts);
        }
    });

// Get single post
http.get('http://jsonplaceholder.typicode.com/posts/1',
    function (err, posts) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(posts);
        }
    });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create Post
http.post('http://jsonplaceholder.typicode.com/posts', data, function (err, post) {

    if (err) {
        console.log(err);
    }
    else {
        console.log(post);
    }

});

// Update Post
http.put('http://jsonplaceholder.typicode.com/posts/5', data, function (err, post) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
});

// Delte post
http.delete('http://jsonplaceholder.typicode.com/posts/1',
    function (err, response) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(response);
        }
    });