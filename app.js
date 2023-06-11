const giphyForm = document.querySelector('#giphySearch')
const containerDiv = document.querySelector('#container')
const token = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
const removeBtn = document.querySelector('#removeImgBtn')


giphyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerms = document.querySelector("#searchText").value.replace(/ /g, '+');
    const gif =  await searchGiphy(searchTerms);
    appendToDom(gif)
})

removeBtn.addEventListener('click', () => {
    containerDiv.innerHTML = ''
})
async function searchGiphy(search) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=b5FCQtiBZGNY3k9oYpNo7pa7NaXKv7JQ&limit=1`);
    return(res.data.data[0].images.original.url)
}


function appendToDom(gif) {
    const imgElement = document.createElement('img')
    imgElement.src = gif
    containerDiv.append(imgElement)
}

