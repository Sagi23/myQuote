const newQuoteBtn = document.querySelector('.generate-btn');
const saveQuoteBtn = document.querySelector('.save-btn');
const newAuthor = document.querySelector('.author')
const newQuote = document.querySelector('.text')
const ul = document.querySelector('.list')

newQuoteBtn.addEventListener('click', function(){
    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let rand = Math.floor(Math.random() * 1664)
        newQuote.innerText = data[rand].text;
        if (data[rand].author == null){
            newAuthor.innerText = 'Unknown';
        } else {
            newAuthor.innerText = data[rand].author;
        }
        saveQuoteBtn.classList.remove('show')
      });
})

saveQuoteBtn.addEventListener('click', function(){
  let newLi = document.createElement('li');
  let newBtn = document.createElement('button');
  newLi.classList.add('list');
  newBtn.classList.add('delete-btn');
  newBtn.textContent = 'Delete'
  newLi.innerHTML = `<b><i>${newAuthor.innerText}</i></b> - ${newQuote.innerText}`
  ul.append(newLi, newBtn)
  newBtn.addEventListener('click',function(){
    newLi.remove(newLi.innerHTML);
    newBtn.remove(newBtn);
  })
})
