let fetch_json = () => {

    return new Promise(function (resolve, reject) {

        let arbitrary_data = JSON.stringify({ data: 'Blah, blah, blah' });

        // Randomly fails (just like things on the web do)
        if (Math.floor(Math.random() * 10) > 5) {
            setTimeout(resolve, 50, arbitrary_data); // After 500ms resolve, passing aribitrary_data
        } else {
            setTimeout(reject, 50, new Error('It\'s all gone wrong!')); // After 500ms resolve, passing aribitrary_data
        }
    });
};

module.exports = fetch_json;