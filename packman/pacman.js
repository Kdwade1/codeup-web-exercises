const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d')
// console.log(c)
canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
    static width = 40;
    static height = 40;

    constructor({position}) {
        this.position = position
        this.width = 40;
        this.height = 40;
    }

    draw() {
        c.fillStyle = "blue";
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

//create pacman and his movemnts

class PacMan {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.radius = 10

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
    ['-', '-', '-', '-', '-', '-'],
    ['-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-']
]
map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        switch (symbol) {
            case'-':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        }


                    })
                )
                break;
        }
    })
})
function circleCollidesWithRectangle({circle, rectangle}) {
    return (
        circle.position.y - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height && circle.position.x + circle.radius + circle.velocity.x >= circle.position.x && circle.position.y + circle.radius + circle.velocity.y >= rectangle.position.y && circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width
    )


    }

//pacman movements and animations
    function animate() {
        requestAnimationFrame(animate)
        c.clearRect(0, 0, canvas.width, canvas.height)

        if (keys.w.pressed && lastKey === 'w') {
            pacMan.velocity.y = -5
        } else if (keys.s.pressed && lastKey === 's') {
            pacMan.velocity.y = 5
        } else if (keys.a.pressed && lastKey === 'a') {
            pacMan.velocity.x = -5
        } else if (keys.d.pressed && lastKey === 'd') {
            pacMan.velocity.x = 5
        }
        boundaries.forEach(boundary => {
            boundary.draw()
            // checks collision
            if (circleCollidesWithRectangle({
                circle:pacMan,
                rectangle: boundary
            })
            ){
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
