"use strict";
const URL = "https://api.github.com/users/kdwade1/events/public"
fetch(URL, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}})
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        let lastCommit = {
            date: `${data[0].created_at}`
        }
console.log(lastCommit)
    })