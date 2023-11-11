

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3';

export const AccountInvoiceChart = ({ data }) => {
    const svgRef = useRef(null);
  
    useEffect(() => {
      const svg = d3.select(svgRef.current);
      const svgWidth = 600;
      const svgHeight = 200;
  
      const xScale = d3.scaleLinear()
        .domain([1, data.dailyData.length]) 
        .range([0, svgWidth]);
  
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data.dailyData, d => d.balance)])
        .nice()
        .range([svgHeight, 0]);
  
      const line = d3.line()
        .x((d, i) => xScale(i + 1)) 
        .y(d => yScale(d.balance))
        .curve(d3.curveBasis); 
  
      const path = svg.selectAll('path')
        .data([data.dailyData])
        .join('path')
        .attr('fill', 'none')
        .attr('stroke', '#59BE59') 
        .attr('stroke-width', 2)
        .attr('d', line);
  
      path
        .attr('stroke-dasharray', function () {
          const length = this.getTotalLength();
          return `${length} ${length}`;
        })
        .attr('stroke-dashoffset', function () {
          return this.getTotalLength();
        })
        .transition()
        .duration(500) 
        .ease(d3.easeLinear)
        .attr('stroke-dashoffset', 0);
    }, [data]);
  
    return <svg ref={svgRef} width={600} height={200}></svg>;
  };