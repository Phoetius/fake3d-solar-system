function Sun(x,y)
{
    this.element = null;
    this.rot = 0;
    this.x = x;
    this.y = y;
    
    this.install = function()
    {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.element.style.position = "fixed";
        this.element.setAttribute("r", "5");
        this.element.setAttribute("fill", "red");
        this.element.style.transform = "translate("+this.x+"px,"+this.y+"px)";
        
        svg.appendChild(this.element);
    }
    
    this.update = function()
    {
        this.rot+=1;
    }
    
    this.install();
}