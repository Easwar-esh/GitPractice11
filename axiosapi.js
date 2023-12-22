let getB=document.getElementById('get-btn');
let sentB=document.getElementById('post-btn');

let getData = () => {
    axios.get('https://reqres.in/api/users?page=2')
    .then((response)=>{
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
};

const sendData = () => {
    axios.post('https://reqres.in/api/register',{
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    })
    .then(response =>{
        console.log(response)
    })
}; 

getB.addEventListener('click',getData);
sentB.addEventListener('click',sendData);