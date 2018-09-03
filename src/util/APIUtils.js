const request = (options) => {
    
    return fetch(options.url)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};
export function getAllJokes() {
    return request({
        url: "https://api.icndb.com/jokes/random/8?escape=javascript",
        method: 'GET'
    });   
}
