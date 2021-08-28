

const loadUser = ()=>{
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data=> {
        const newData = data.results[0];
        imagePreveiw(data.results[0]);

        const name = `${newData.name.first} ${newData.name.last}`
        nameView(name,'My name is');

        document.getElementById('name-btn').addEventListener('click',()=>{
            const name = `${newData.name.first} ${newData.name.last}`
            nameView(name,'My name is');
        })

        document.getElementById('email-btn').addEventListener('click',()=>{
            const email = newData.email;
            nameView(email,'My email is');
        })
        document.getElementById('birth-btn').addEventListener('click',()=>{
            const dob= newData.dob.date;
            nameView(dob.substr(0,10),'My birth date is');
        })
        document.getElementById('phone-btn').addEventListener('click',()=>{
            const phone = newData.phone;
            nameView(phone,'My phone number is');
        })
    })
}
loadUser()

document.getElementById('reload-button').addEventListener('click',()=>{
    
    document.getElementById('my-image').textContent='';
    //document.getElementById('title-action').textContent='';
    loadUser();
})

function imagePreveiw(data){
    console.log(data.picture)
   const url = data.picture.large;
   const imageContaier = document.getElementById('my-image');
   const image = document.createElement('div');
   image.innerHTML=`
   <img class="border border-3 border-secondary rounded-circle" src="${url}" alt="" width="150px" height="150px">
   `
   imageContaier.appendChild(image);
}



function nameView(name,titleText){
    const viewName = document.getElementById('my-name');
    const title = document.getElementById('title-action');
    title.innerText=titleText;
    viewName.innerText=name;
    
}
