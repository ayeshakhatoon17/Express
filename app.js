import express from 'express'

const PORT = 5000;
const app = express()
const data = {
    "login": "ayeshakhatoon17",
    "id": 118762990,
    "node_id": "U_kgDOBxQt7g",
    "avatar_url": "https://avatars.githubusercontent.com/u/118762990?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ayeshakhatoon17",
    "html_url": "https://github.com/ayeshakhatoon17",
    "followers_url": "https://api.github.com/users/ayeshakhatoon17/followers",
    "following_url": "https://api.github.com/users/ayeshakhatoon17/following{/other_user}",
    "gists_url": "https://api.github.com/users/ayeshakhatoon17/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ayeshakhatoon17/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ayeshakhatoon17/subscriptions",
    "organizations_url": "https://api.github.com/users/ayeshakhatoon17/orgs",
    "repos_url": "https://api.github.com/users/ayeshakhatoon17/repos",
    "events_url": "https://api.github.com/users/ayeshakhatoon17/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ayeshakhatoon17/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Ayesha Khatoon",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Frontend Developer",
    "twitter_username": "Ayesha__Khatoon",
    "public_repos": 16,
    "public_gists": 4,
    "followers": 4,
    "following": 5,
    "created_at": "2022-11-21T17:45:18Z",
    "updated_at": "2023-03-02T00:06:47Z"
    }
app.get('/',(req,res)=>{
res.json(data)
console.log(req.params)
})

app.listen(PORT,()=>{
    console.log('server listening at port no',PORT)
})