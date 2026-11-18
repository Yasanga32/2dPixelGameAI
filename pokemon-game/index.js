const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './images/Pellet Town.png'

const playerImage = new Image()
playerImage.src = './images/playerDown.png'

const drawPlayer = () => {
    if (!playerImage.complete) return
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        canvas.width / 2 - (playerImage.width / 4) / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height
    )
}

class Sprite {
    constructor({ position, velocity, image }) {
        this.position = position
        this.velocity = velocity
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({
    position: {
        x: -785,
        y: -560
    },
    image: image
})



function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    drawPlayer()
}

animate()


window.addEventListener('keydown', (e) => {
    switch (e.key.toLowerCase()) {
        case 'w':
            console.log('pressed w key')
            break
        case 'a':
            console.log('pressed a key')
            break
        case 's':
            console.log('pressed s key')
            break
        case 'd':
            console.log('pressed d key')
            break
    }
})

