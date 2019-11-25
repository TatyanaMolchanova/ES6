requirejs(["async"], function(async) {
    const fetch = require('node-fetch');


    function getUser(id) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    }
    
    async function main() {
        
        let user = await getUser(1);
        
        console.log(user);
    }
    
    main();
});