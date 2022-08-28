const defaultOptions = {
    x:0,
    y:0,
    w:50,
    h:50,
    c:"#000"
}
export class Rect{
    options: any
    constructor(options){
        this.options = Object.assign({},defaultOptions,options)
    }
    draw(ctx){
        let {x,y,w,h,c} = this.options
        ctx.fillStyle = c
        ctx.fillRect(x,y,w,h)
    }
}