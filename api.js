
const dog_show=()=>{
const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_8hIt1UMH3d8bst8evo11H4QMgvWQkqnopKFyllOppyJQRvgiQpaVXFWmve8jhNEd"
  });
  
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  
  fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    .then(response => response.json())
    .then(result =>{
        let div_nome = document.querySelector('#name')
        let div_img = document.querySelector('#img_dog')
        let dog_info = result[0].breeds[0]
        let img = Object.entries(result)[0][1].url

        console.dir(dog_info)
        console.dir(img)
        div_nome.innerHTML = `${dog_info.name}`
        div_img.setAttribute('src',img)
        document.querySelector('.info_dog').innerHTML = `<span>Name:</span> ${dog_info.name} <br> <span>Life span:</span> ${dog_info.life_span} <br> <span>breed group:</span> ${dog_info.breed_group} <br> ${dog_info.temperament} <br> <span>Weight:</span> ${dog_info.weight.imperial} `

})
    .catch(error => console.log('error', error))
}

dog_show()