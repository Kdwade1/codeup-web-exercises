const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d')

const score = document.querySelector("#scoreEL")
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

class Pellet {
    constructor({position}) {
        this.position = position
        this.radius = 3

    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = 'white'
        c.fill()
        c.closePath();
    }

}

class Ghost {
    static speed =2
    constructor({position, velocity, color = 'red'}) {
        this.position = position
        this.velocity = velocity
        this.radius = 15
        this.color = color
        this.prevCollisions = [];
        this.speed =2

    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = this.color
        c.fill()
        c.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

const pellets = [];
const boundaries = []
const ghost = [new Ghost({
    position: {
        x: Boundary.width * 6 + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2
    },
    velocity: {
        x: Ghost.speed,
        y: 0
    }
}),
    new Ghost({
        position: {
            x: Boundary.width * 6 + Boundary.width / 2,
            y: Boundary.height *3 + Boundary.height / 2
        },
        velocity: {
            x: Ghost.speed,
            y: 0
        },
        color:"pink"
    })
]
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
let scores = 0
//the arena the game follows
const map = [
    ['1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '2'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '7', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
    ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
    ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '+', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
    ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
    ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '5', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', 'p', '|'],
    ['4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '3']
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
            case'b':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },
                        image: placeImage('./image/block.png')


                    })
                )
                break;
            case '[':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        image: placeImage('./image/capLeft.png')
                    })
                )
                break
            case ']':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        image: placeImage('./image/capRight.png')
                    })
                )
                break
            case '_':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        image: placeImage('./image/capBottom.png')
                    })
                )
                break
            case '^':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        image: placeImage('./image/capTop.png')
                    })
                )
                break
            case '+':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        image: placeImage('./image/pipeCross.png')
                    })
                )
                break
            case '5':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        color: 'blue',
                        image: placeImage('./image/pipeConnectorTop.png')
                    })
                )
                break
            case '6':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        color: 'blue',
                        image: placeImage('./image/pipeConnectorRight.png')
                    })
                )
                break
            case '7':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        color: 'blue',
                        image: placeImage('./image/pipeConnectorBottom.png')
                    })
                )
                break
            case '8':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        image: placeImage('./image/pipeConnectorLeft.png')
                    })
                )
                break
            case '.':
                pellets.push(
                    new Pellet({
                        position: {
                            x: j * Boundary.width + Boundary.width / 2,
                            y: i * Boundary.height + Boundary.height / 2
                        }
                    })
                )
                break

        }
    })
})

function circleCollidesWithRectangle({circle, rectangle}) {
    const padding =Boundary.width/2-circle.radius-1
    return (
        //top of pacman hitting border
        circle.position.y - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height+padding &&
        //right of pacman hitting border
        circle.position.x + circle.radius + circle.velocity.x >= rectangle.position.x-padding &&
        //bottom of pacman hitting border
        circle.position.y + circle.radius + circle.velocity.y >= rectangle.position.y-padding &&
        //left of pacman hitting border
        circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width+padding
    )


}
let animationId;

//pacman movements and animations
function animate() {
   animationId= requestAnimationFrame(animate)
    console.log(animationId)
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
    //touch pellets collision
    for (let i = pellets.length - 1; 0 < i; i--) {
        const pellet = pellets[i]
        pellet.draw()
        if (Math.hypot(pellet.position.x - pacMan.position.x, pellet.position.y - pacMan.position.y) < pellet.radius + pacMan.radius) {
            console.log("touching")
            pellets.splice(i, 1)
            scores += 100
            score.innerHTML = scores
        }
    }
    // pellets.forEach((pellet,i) =>{


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
    ghost.forEach((ghost) => {
        ghost.update()
        if (Math.hypot(ghost.position.x - pacMan.position.x, ghost.position.y - pacMan.position.y) < ghost.radius + pacMan.radius) {
            cancelAnimationFrame(animationId)
            console.log('you lose')

        }
        const collisions = []
        boundaries.forEach(boundary => {
            if (
                !collisions.includes('right') &&
                circleCollidesWithRectangle({
                    circle: {
                        ...ghost, velocity: {
                            x: ghost.speed,
                            y: 0

                        }
                    },
                    rectangle: boundary
                })
            ) {
                collisions.push("right")

            }
            if (
                !collisions.includes('left') &&
                circleCollidesWithRectangle({
                    circle: {
                        ...ghost, velocity: {
                            x: -ghost.speed,
                            y: 0

                        }
                    },
                    rectangle: boundary
                })
            ) {
                collisions.push("left")

            }
            if (
                !collisions.includes('down') &&
                circleCollidesWithRectangle({
                    circle: {
                        ...ghost, velocity: {
                            x: 0,
                            y: ghost.speed

                        }
                    },
                    rectangle: boundary
                })
            ) {
                collisions.push("down")

            }
            if (
                !collisions.includes('up') &&
                circleCollidesWithRectangle({
                    circle: {
                        ...ghost, velocity: {
                            x: 0,
                            y: -ghost.speed

                        }
                    },
                    rectangle: boundary
                })
            ) {
                collisions.push("up")

            }

        })
        if (collisions.length > ghost.prevCollisions.length)
            ghost.prevCollisions = collisions
        console.log(collisions)

        if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {

            if (ghost.velocity.x > 0) ghost.prevCollisions.push('right')
            else if (ghost.velocity.x < 0) ghost.prevCollisions.push('left')
            else if (ghost.velocity.y > 0) ghost.prevCollisions.push('down')
            else if (ghost.velocity.y < 0) ghost.prevCollisions.push('up')

            console.log(collisions)
            console.log(ghost.prevCollisions);

            const pathways = ghost.prevCollisions.filter((collision) => {
                return !collisions.includes(collision)
            })
            console.log({pathways})

            const direction =pathways[Math.floor(Math.random()*pathways.length)]
            console.log({direction})
            switch(direction){
                case'down':
                    ghost.velocity.y=ghost.speed;
                    ghost.velocity.x=0;
                    break;
                case'up':
                    ghost.velocity.y=-ghost.speed;
                    ghost.velocity.x=0;
                    break;
                case'right':
                    ghost.velocity.y=0;
                    ghost.velocity.x=ghost.speed;
                    break;
                case'left':
                    ghost.velocity.y=0;
                    ghost.velocity.x=-ghost.speed;
                    break;
            }
            ghost.prevCollisions = []
        }


    })
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
