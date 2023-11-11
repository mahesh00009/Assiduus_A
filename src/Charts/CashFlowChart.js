

import * as d3 from 'd3';
import { useEffect, useRef } from 'react';


const CashFlowChart = ({ data }) => {
    const svgRef = useRef(null);
  
    useEffect(() => {
      const svg = d3.select(svgRef.current);
      const svgWidth = 600;
      const svgHeight = 250;
      const margin = { top: 30, right: 20, bottom: 30, left: 40 };
      const width = svgWidth - margin.left - margin.right;
      const height = svgHeight - margin.top - margin.bottom;
  
      const x = d3.scaleBand()
        .domain(data.map(d => d.month))
        .range([0, width])
        .padding(0.1);
  
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.inFlow, d.outFlow))])
        .nice()
        .range([height, 0]);
  
      svg.selectAll('.in-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'in-bar')
        .attr('x', d => x(d.month) + x.bandwidth() / 4)
        .attr('y', d => y(d.inFlow))
        .attr('width', x.bandwidth() / 2)
        .attr('height', d => height - y(d.inFlow))
        .style('fill', '#59BE59')
        .style('width', '20px');
  
      svg.selectAll('.out-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'out-bar')
        .attr('x', d => x(d.month) + x.bandwidth() / 4)
        .attr('y', d => y(d.outFlow))
        .attr('width', x.bandwidth() / 2)
        .attr('height', d => height - y(d.outFlow))
        .style('fill', 'steelBlue')
        .style('width', '20px');
  
      svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll('text')
        .attr('class', 'axis-label')
        .style('text-anchor', 'middle');

  
    }, [data]);
  
    return (
      <svg ref={svgRef} width={600} height={250}></svg>
    );
  };
  
  export default CashFlowChart;

