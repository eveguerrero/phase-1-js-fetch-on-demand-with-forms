

const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener('submit', e => {
      e.preventDefault();
      console.log(e)
    //   e.target.children[1].value 
    const input = document.querySelector('input#searchByID');

    console.log(input.value)

    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  })
}

document.addEventListener('DOMContentLoaded', init);