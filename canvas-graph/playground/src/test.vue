<script setup lang="ts">
import { $ref } from 'vue/macros'
import {onMounted} from 'vue'
import {op_config} from './types'
let dom:HTMLCanvasElement = $ref()
let ctx:CanvasRenderingContext2D | null = $ref()
let isDown = $ref(false)
let first_m = $ref( {x:0,y:0})
let last_m = $ref( {x:0,y:0})
let d = {x:0,y:0};
let D = {x:0,y:0};
let config:op_config = $ref()

function background(){
  createRect(config)
}
function createRect({x=0,y=0,w=50,h=50,c='#000'}){
  if(!ctx) return 
  ctx.fillStyle = c
  ctx.fillRect(x,y,w,h)
}

function init(){
  return new Promise((res)=>{
    let _dom = document.querySelector('#app') as HTMLElement
    if(!_dom) return 
    let w = _dom.offsetWidth
    let h = _dom.offsetHeight
    config = {w,h}
    dom.width = w
    dom.height = h
    ctx = dom.getContext('2d')
    background()
    res(true)
  })
}
  
function main(){
  createRect({c:"#fff",x:100,y:100})
  createRect({c:"#fff",x:200,y:200})
}
  
onMounted(async ()=>{
  await init()
  main()
})
window.addEventListener('resize',async　()=>{
　await init()
  main()
})

/**
 * @description canvas inside element drag
 */
function elementDrag(){}

/**
 * @description canvas background drag
 */

window.addEventListener("mousedown",(evt: MouseEvent)=>{
  first_m = oMousePos(evt)
  isDown = true
})
  
window.addEventListener("mousemove",(evt: MouseEvent)=>{
  if(!isDown||!ctx) return
   last_m = oMousePos(evt);
   d.x = last_m.x - first_m.x + D.x;
   d.y = last_m.y - first_m.y + D.y;
   background()
   ctx.save();
   ctx.translate(d.x, d.y);
   main()
   ctx.restore()
})  
window.addEventListener("mouseup",(evt: MouseEvent)=>{
  isDown = false
  last_m = oMousePos(evt); 
  d.x = last_m.x - first_m.x;
  d.y = last_m.y - first_m.y;
  D.x += d.x;
  D.y += d.y;
})
  
/*
 * @description 鼠标移动
 */  
function oMousePos(evt: MouseEvent){
    let ClientRect = dom.getBoundingClientRect();
    return { 
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
    }
}  
</script>

<template>
 <canvas ref='dom'/>
</template>
