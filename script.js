// FETCH

async function response(){
    let a=await fetch('one.txt');
    let b=await a.text();
    console.log(bw);
}

// response().catch(rej => {
//     console.log(rej);
// });

// fetch('players.json').then(res =>{
//     console.log(res);
//     return res.json();
// }).then(res => {
//     console.log(res);
// })

async function ViewPlayers(){
    let a=await fetch('players.json');
    let b=await a.json();
    console.log(b);
    console.log(str);
}
//  ViewPlayers().catch(rej =>{
//     console.log(rej)
//  })


// Main

let wrap=document.getElementById('wrapper')
let team=document.getElementById('teams')
// const opt=document.createElement('option')
// const node=document.createTextNode('Australia')
// opt.appendChild(node)
// team.appendChild(opt);
let teams=[];
let objteam=[];
async function getTeams(){
    let jso=await fetch('players.json');
    let obj=await jso.json();
    let arr=obj.cricket;
    teams=arr.teams;
    console.log(teams);
    // let ar=[];
    for(let i=0;i<teams.length;i++){
        console.log(Object.keys(teams[i]));
        const opt=document.createElement('option');
        let tem=Object.keys(teams[i]);
        const node=document.createTextNode(tem[0]);
        opt.appendChild(node);
        team.appendChild(opt);
        // ar.push(opt);
    }
}

getTeams().catch((err)=>{
    console.log(err);
})

let player=document.getElementById('Players')
function retrieve(val){
    let check=val;
    while(player.firstChild){
        player.removeChild(player.firstChild);
    }
    for(let i=0;i<teams.length;i++){
        if(check == Object.keys(teams[i])){
            console.log(teams[i])
            let obj=teams[i];
            let ar=obj[check];
            console.log(ar);
            ar.forEach(element => {
                const hed=document.createElement('h6');
                const nod=document.createTextNode(element);
                hed.appendChild(nod);
                player.appendChild(hed);
            });
        }
    }
}


const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{

    retrieve(team.value);
})
