class Particle{
    constructor(x, y)
    {
        this.x = x
        this.y = y
        this.c = color(random(255), random(255), random(255))
        this.size = random(5,6)
        this.vector = p5.Vector.random2D().mult(random(1,10))
        this.gravity = 0.3
    }
    draw()
    {
        fill(this.c)
        ellipse(this.x, this.y, this.size)
    }
    update()
    {
        this.x += this.vector.x
        this.y += this.vector.y
        this.vector.y += this.gravity
    }
}