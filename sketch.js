let ps = [];

function setup()
{
    createCanvas(windowWidth, windowHeight)
    background(0)
    
}

function draw()
{
    background(0,50)
    ps = ps.filter((p) => {
        return p.y <= height
    })
    for (let i in ps)
    {
        ps[i].update()
        ps[i].draw()
    }

}

function mousePressed()
{
    for (let i = 1; i <= 50; i++)
    {
        ps.push(new Particle(mouseX, mouseY))
    }
}