<script setup lang="ts">
import { $ref } from 'vue/macros'
import {onMounted,ref} from 'vue'
import type {op_config} from './types'
import {useCanvasDrag} from '@/hooks/useCanvasDrag'
import {Rect} from '@/graph/rect'
let dom= ref<HTMLCanvasElement|null>(null)
let ctx:CanvasRenderingContext2D | null = $ref()
let config:op_config = $ref()


const {draw,init: CDInit} = useCanvasDrag(dom)

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
    if(!_dom || !dom.value) return 
    let w = _dom.offsetWidth
    let h = _dom.offsetHeight
    config = {w,h}
    dom.value.width = w
    dom.value.height = h
    ctx = dom.value.getContext('2d')
    background()
    res(true)
    CDInit()
    draw([background, main])
  })
}
  
function main(){
  Array.from({length:10},(v,i)=>{
    return new Rect({c:"#fff",x:i*50,y:i*50}).draw(ctx)
  })
}
  
onMounted(async ()=>{
  await init()
  main()
})


/**
 * @description canvas inside element drag
 */
function elementDrag(){}
</script>

<template>
 <canvas ref='dom'/>
</template>
