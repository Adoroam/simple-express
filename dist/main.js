const searchEl = document.getElementById("search")
const card_holder = document.querySelector('.card-columns')

const card_fill = (input) => {
  let { link, title, description } = input
  return `
    <div class="card">
      <a href=${link} target="_blank">${title}</a>
      <p class="card-body">${description}</p>
    </div>
  `
}

document.body.onkeypress = function (ev) {
  console.log(ev)
  if (ev.key === 'Enter' && searchEl.value.length) {
    $.getJSON(
      `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${searchEl.value}`,
      function (data) {
        let output = data[1].map((item, ind) => ({
          title: item,
          description: data[2][ind],
          link: data[3][ind],
        }))
        
        output.forEach(item => {
          let new_div = document.createElement("div")
          new_div.innerHTML = card_fill(item) 
          card_holder.appendChild(new_div) 
        })
      }
    )
  }
}
