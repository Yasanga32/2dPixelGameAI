const canvas = document.querySelector('canvas')
const c = canvas.gtContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillstyle = 'white'
c.fillrect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './images/Pellet Town.png'

c.drawImage('./images/Pellet Town.png')

console.log(c)