const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const multipleLanguages=users.filter((language)=>language.languages.length>=3)
console.log(multipleLanguages)

const emailArray = users.map((user)=>user['email'])
console.log(emailArray)

const average = users.length;
const totalExperience= users.reduce((x,user) => x + user.yearsOfExperience/average,0);
console.log(totalExperience);

const longestEmail= users.reduce((x,user)=>  {
  return  (x.length > user.email.length) ? x : user.email;
} ,'');

console.log(longestEmail);

const userNames= users.reduce((x,user)=>{
    return x + user.name+','
},"")
console.log(userNames);

const unique= users.reduce((x,user)=>{
for(let langs of user.languages) {
    if (!x.includes(langs)) {
        x.push(langs)
    }
}
return langs
},[])
console.log(unique)