function getProjetos(){
    const urlGitHub = 'https://api.github.com/users/silvacleanne/repos'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
        loadingElement.style.display = 'none'
        console.log(response)
        showProjetos(response)
    })
    .catch((e) => {
        console.log(e)
    })
}

function showProjetos(data){
    var listElement = document.getElementById('lista-projetos')

    for(let i = 0; i < data.length; i++)
    {
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    } 
}

getProjetos()