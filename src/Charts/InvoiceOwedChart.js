import * as d3 from 'd3';

import { InvoiceOwedData } from '../Datas/InvoiceOwedData';
import { useEffect, useRef } from 'react';


const InvoiceOwedChart = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const svgWidth = 650;
    const svgHeight = 230;
    const margin = { top: 30, right: 20, bottom: 30, left: 40 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(InvoiceOwedData.map(d => d.label))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(InvoiceOwedData, d => d.value)])
      .nice()
      .range([height, 0]);

    svg.selectAll('.bar')
      .data(InvoiceOwedData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.label) + (x.bandwidth() - 10) / 2)
      .attr('y', d => y(d.value))
      .attr('width', 10)
      .attr('height', d => height - y(d.value))
      .style('fill', '#59BE59');

    // Remove x-axis line
    svg.selectAll('.x-axis path').remove();

    // Add x-axis labels with gray color
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .selectAll('text')
      .attr('class', 'axis-label')
      .style('text-anchor', 'middle')
      .style('fill', 'gray'); // Set x-axis text color

    // Remove y-axis
    svg.selectAll('.y-axis').remove();

    
  }, []);

  return (
    <svg ref={svgRef} width={650} height={230}></svg>
  );
};

export default InvoiceOwedChart