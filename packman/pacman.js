const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d')
// console.log(c)
canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
    static width = 40;
    static height = 40;

    constructor({position, image}) {
        this.position = position
        this.width = 40;
        this.height = 40;
        this.image = image;
    }

    draw() {
        // c.fillStyle = "blue";
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

//create pacman and his movements

class PacMan {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.radius = 15

    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = 'yellow'
        c.fill()
        c.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}


const boundaries = []
const pacMan = new PacMan({
    position: {
        x: Boundary.width + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2
    },
    velocity: {
        x: 0,
        y: 0
    }
});
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}
let lastKey = ''
//the arena the game follows
const map = [
    ['1', '-', '-', '-', '-', '-', '2'],
    ['|', ' ', ' ', ' ', ' ', ' ', '|'],
    ['|', ' ', 'b', ' ', 'b', ' ', '|'],
    ['|', ' ', ' ', ' ', ' ', ' ', '|'],
    ['|', ' ', 'b', ' ', 'b', ' ', '|'],
    ['|', ' ', ' ', ' ', ' ', ' ', '|'],
    ['4', '-', '-', '-', '-', '-', '3']
]

function placeImage(src) {
    const image = new Image()
    image.src = src
    return image
}

map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        switch (symbol) {
            case'-':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        image: placeImage('./image/pipeHorizontal.png')


                    })
                )
                break;
            case'|':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        image: placeImage('./image/pipeVertical.png')


                    })
                )
                break;
            case'1':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        image: placeImage('./image/pipeCorner1.png')


                    })
                )
                break;
            case'2':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        image: placeImage('./image/pipeCorner2.png')


                    })
                )
                break;
            case'3':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        image: placeImage('./image/pipeCorner3.png')


                    })
                )
                break;
            case'4':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        image: placeImage('./image/pipeCorner4.png')


                    })
                )
                break;

        }
    })
})

function circleCollidesWithRectangle({circle, rectangle}) {
    return (
        //top of pacman hitting border
        circle.position.y - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height &&
        //right of pacman hitting border
        circle.position.x + circle.radius + circle.velocity.x >= rectangle.position.x &&
        //bottom of pacman hitting border
        circle.position.y + circle.radius + circle.velocity.y >= rectangle.position.y &&
        //left of pacman hitting border
        circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width
    )


}

//pacman movements and animations
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    if (keys.w.pressed && lastKey === 'w') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                circleCollidesWithRectangle({
                    circle: {
                        ...pacMan, velocity: {
                            x: 0,
                            y: -5

                        }
                    },
                    rectangle: boundary
                })
            ) {
                pacMan.velocity.y = 0
                break
            } else {
                pacMan.velocity.y = -5
            }
        }

    } else if (keys.s.pressed && lastKey === 's') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                circleCollidesWithRectangle({
                    circle: {
                        ...pacMan, velocity: {
                            x: 0,
                            y: 5

                        }
                    },
                    rectangle: boundary
                })
            ) {
                pacMan.velocity.y = 0
                break
            } else {
                pacMan.velocity.y = 5
            }
        }
    } else if (keys.a.pressed && lastKey === 'a') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                circleCollidesWithRectangle({
                    circle: {
                        ...pacMan, velocity: {
                            x: -5,
                            y: 0

                        }
                    },
                    rectangle: boundary
                })
            ) {
                pacMan.velocity.x = 0
                break
            } else {
                pacMan.velocity.x = -5
            }
        }
    } else if (keys.d.pressed && lastKey === 'd') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                circleCollidesWithRectangle({
                    circle: {
                        ...pacMan, velocity: {
                            x: 5,
                            y: 0

                        }
                    },
                    rectangle: boundary
                })
            ) {
                pacMan.velocity.x = 0
                break
            } else {
                pacMan.velocity.x = 5
            }
        }
    }

    boundaries.forEach(boundary => {
        boundary.draw()
        // checks collision
        if (circleCollidesWithRectangle({
            circle: pacMan,
            rectangle: boundary
        })
        ) {
            pacMan.velocity.y = 0
            pacMan.velocity.x = 0
        }

    })
    pacMan.update()
    // pacMan.velocity.y = 0
    // pacMan.velocity.x = 0

}

animate()


window.addEventListener('keydown', ({key}) => {

    switch (key) {
        case'w':
            keys.w.pressed = true
            lastKey = 'w'
            break;
        case's':
            keys.s.pressed = true
            lastKey = 's'
            break;
        case'a':
            keys.a.pressed = true
            lastKey = 'a'
            break;
        case'd':
            keys.d.pressed = true;
            lastKey = 'd'
            break;
    }

})
window.addEventListener('keyup', ({key}) => {

    switch (key) {
        case'w':
            keys.w.pressed = false;
            break;
        case's':
            keys.s.pressed = false;
            break;
        case'a':
            keys.a.pressed = false;
            break;
        case'd':
            keys.d.pressed = false;
            break;
    }

})
