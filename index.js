// Add your code here
function submitData(name, email){
    let fetchPost = fetch('http://localhost:3000/users', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name:`${name}`,
            email: `${email}`
        })
    })
    .then(response => response.json())
    .then(object => {
        const li = document.createElement('li')
        li.innerHTML = object.id
        document.querySelector('body').appendChild(li)
    })
    .catch(error => {
        const nli = document.createElement('li')
        nli.innerHTML = error.message
        document.querySelector('body').appendChild(nli)
    })
    return fetchPost
}
