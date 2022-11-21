//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getCode);

// function getFetch() {
//   const choice = document.querySelector('input').value;
//   const url = 'https://pokeapi.co/api/v2/pokemon/' + choice;

//   fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(`error ${err}`);
//     });
// }

class CodeURL {
  #baseUrl = 'https://api.qrserver.com/v1/create-qr-code/';
  color = '#000000';
  bgcolor = '#ffffff';
  format = 'gif';
  constructor(data, size, color, bgcolor, format) {
    this.data = data;
    this.size = size;
    this.color = color;
    this.bgcolor = bgcolor;
    this.format = format;
  }
  get formattedColor() {
    return this.color.slice(1);
  }
  get formattedBgColor() {
    return this.bgcolor.slice(1);
  }
  get formattedSize() {
    return `${this.size}x${this.size}`;
  }
  get fullUrl() {
    return `${this.#baseUrl}?data=${encodeURIComponent(this.data)}&size=${
      this.formattedSize
    }&color=${this.formattedColor}&bgcolor=${this.formattedBgColor}&format=${
      this.format
    }`;
    // return this.data;
  }
}

function getCode(e) {
  e.preventDefault();
  const data = document.querySelector('#data-input').value;
  const size = document.querySelector('#size').value;
  const color = document.querySelector('#foreground-color').value;
  const bgcolor = document.querySelector('#background-color').value;
  console.log(data, size, color, bgcolor);
  const url = new CodeURL(data, size, color, bgcolor, 'svg');
  const url2 =
    'https://api.qrserver.com/v1/create-qr-code/?data=Hello%20World!&size=100x100';
  const img = document.querySelector('img');
  img.src = url.fullUrl;
  console.log(url.fullUrl);
}
