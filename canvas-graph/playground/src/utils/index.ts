export function oMousePos(dom:HTMLElement,evt: MouseEvent){
    let ClientRect = dom.getBoundingClientRect();
    return { 
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
    }
}