function HPlanet(x,y)
{
    this.element = null;
    this.x = x;
    this.y = y;
    this.radius = Math.random()*10+2;
    this.bdis = dis(sun.x, sun.y, this.x, this.y);
    this.bdir = dir(sun.x, sun.y, this.x, this.y);
    
    this.install = function()
    {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.element.style.position = "fixed";
        this.element.setAttribute("r", this.radius);
        this.element.setAttribute("fill", "white");
        this.element.style.transform = "translate("+this.x+"px,"+this.y+"px)";
        
        svg.appendChild(this.element);
    }
    
    this.update = function()
    {
        this.x = sun.x+ldx(this.bdis, this.bdir+sun.rot);
        this.y = sun.y+ldy(this.bdis/5, this.bdir+sun.rot);
        
        this.element.style.transform = "translate("+this.x+"px,"+this.y+"px)";
        
        this.element.style.zIndex = Math.floor(this.y);
    }
    
    this.install();
}