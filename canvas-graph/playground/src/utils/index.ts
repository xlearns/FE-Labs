export function oMousePos(dom:HTMLElement,evt: MouseEvent){
    let ClientRect = dom.getBoundingClientRect();
    return { 
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
    }
}

export function cursorInRect(mouseX, mouseY, rectX, rectY, rectW, rectH){
  let xLine = mouseX > rectX && mouseX < rectX + rectW
  let yLine = mouseY > rectY && mouseY < rectY + rectH
  return xLine && yLine
}