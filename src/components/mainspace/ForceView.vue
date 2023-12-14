<script setup>
import { onMounted, ref } from 'vue';
import * as d3 from 'd3' 
const data = { 
  'nodes':[{id:1, name: 'Yuanda'},{id:2, name:'chinese'}],
  'links': [{source: 1, target:2}]
}

const init = function () {
  const width = 900;
  const height = 710;
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const links = data.links.map(d => ({ ...d }));
  const nodes = data.nodes.map(d => ({ ...d }));

  const simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(-10).theta(0.9).distanceMin(20).distanceMax(100)) // strength 指定强度
    .force("link", d3.forceLink(links).id(d => d.id).distance(200)) // 这个id是连接的关键
    .force("x", d3.forceX())
    .force("y", d3.forceY());

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
    .attr("stroke", "#000") // 节点描边的颜色
    .attr("stroke-width", 1) // 节点的描边宽度
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", 5) // 节点的大小，圆的半径
    .attr("fill", d => color(d.group));

    node.append("name")
    .text(d => d.name);

  // Add a drag behavior.
  node.call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended))
    .on('hover',hovered);

  // Set the position attributes of links and nodes each time the simulation ticks.
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
  const container = document.getElementById('container')
  container.append(svg.node());
}

onMounted(()=>{
  init()
})

</script>


<template>
<div id="container" style="overflow: hidden;" ></div>
</template>


<style scoped>

</style>