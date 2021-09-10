const lastCommitTime = (userName) => {
    fetch(`https://api.github.com/users/${userName}/events`, {
        headers: {
            'Authorization': GITHUB_API_TOKEN
        }
    }).then(response =>
        response.json()).then(response => {
        console.log(response[0].created_at)
    })
        .catch(console.error)
}
lastCommitTime('George-Tudor');


