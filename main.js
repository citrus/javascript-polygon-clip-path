import './style.css'

function applyTornEdge (element) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const pos = (index) => `${(index / size) * 100}%`
  const point = () => `${rand(97, 100)}%`
  const size = Math.round(element.offsetWidth / 10)
  const points = [
    ['0%', '0%'], // top left
    ...new Array(size).fill().map((i, index) => [pos(index), point()]), // top edge
    ['100%', point()], // bottom right
    ['100%', '0%'], // top right
  ]
  element.style['clip-path'] = `polygon(${points.map(i => i.join(' ')).join(',')})`
}

const app = document.querySelector('#app')
const box = document.createElement('div')
box.classList.add('box')
app.appendChild(box)
applyTornEdge(box)
