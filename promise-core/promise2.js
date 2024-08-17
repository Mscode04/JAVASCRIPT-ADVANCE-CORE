const GITHUB_API="https://github.com/Mscode04";
const user=fetch(GITHUB_API);
console.log(user);



user.then(function (data){
    console.log(data)
});