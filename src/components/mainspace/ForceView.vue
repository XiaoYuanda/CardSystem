<script setup>
import { onMounted, watch } from 'vue';
import * as d3 from 'd3' 
const props = defineProps({
  nodesData: Object
})
const makeData = function(){
  // 1. 判断记忆是否过期，过期就设置为红色，没有过期就设置为绿色
  const moment = require('moment');
  const currentTime = new Date(moment().format('YYYY-MM-DD HH:mm:ss'))
  console.log(currentTime)

  for(let i = 0; i < props.nodesData.length; i++){
    let data =  new Date(props.nodesData[i].nextreviewtime)
    if(data > currentTime){
      props.nodesData[i].color = '#0A0'
      console.log('green')
    }else {
      props.nodesData[i].color = '#F00'
      console.log('red')
    }
  }
}
const init = function () {
  makeData() // 改造数据
  let container = document.getElementById('container')
  container.innerHTML = ''
  const width = 900;
  const height = 710;
  // const color = d3.scaleOrdinal(d3.schemeCategory10);

  // const links = props.nodesData.links.map(d => ({ ...d }));
  const links = [].map(d => ({ ...d }));
  const nodes = props.nodesData.map(d => ({ ...d }));

  const simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(-20)) // strength 指定强度
    .force("link", d3.forceLink(links).id(d => d.id).distance(0).strength(1.5)) // 这个id是连接的关键
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .force("charge", d3.forceCollide(20))
    .alpha(1)

    // Create the SVG container.
  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto;");


  svg.call(d3.zoom().on('zoom',({transform})=>{
    svg.selectAll('g').attr('transform', transform)
  }))
  // Add a line for each link, and a circle for each node.
  const link = svg.append("g")
    .attr("stroke", "#aaa") // 线的颜色
    .attr("stroke-opacity", 0.7) //线的透明度
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke-width", d => Math.sqrt(d.value));
  const node = svg.append("g")
    .attr("stroke", "#aaa") // 节点描边的颜色
    .attr("stroke-width", 1) // 节点的描边宽度
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", 10) // 节点的大小，圆的半径
    .attr("fill", (d)=>{
      return d.color
      // return '#f00'
    });

    node.append("name")
    .text(d => d.name);

  // Add a drag behavior.
  node.call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended))
  // Set the position attributes of links and nodes each time the simulation ticks.

  node.on('mouseover', function () {
    // d3.select(this).transition().duration(50).attr('fill', '#000')
  })

  node.on('mouseleave' ,function(){
    // d3.select(this).transition().duration(50).attr('fill', "#eee")
  })
  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);
    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  });

  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function hovered(node){
    console.log(node.name)
  }

  // Update the subject (dragged node) position during drag.
  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  // Restore the target alpha so the simulation cools after dragging ends.
  // Unfix the subject position now that it’s no longer being dragged.
  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    https://observablehq.com/enterprise
    event.subject.fy = null;
  }
  // When this cell is re-run, stop the previous simulation. (This doesn’t
  // really matter since the target alpha is zero and the simulation will
  // stop naturally, but it’s a good practice.)
  // invalidation.then(() => simulation.stop());
  container = document.getElementById('container')
  container.append(svg.node());
}

watch(props,()=>{
  init()
})

onMounted(()=>{
})

</script>


<template>
<div id="container" style="overflow: hidden;" ></div>
</template>


<style scoped>

</style>