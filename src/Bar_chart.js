import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Element } from 'react-faux-dom';
import * as d3 from 'd3';
import './Bar_chart.css';
import Bar_data from './Bar_data';
import data from './Bar_data';

import random from './Random';


// var i = 0;

// export default function Bar_chart () {
// const [chartData, setchartData] = useState([])

//     //   const random = () => {
//     //     for (let i = 0; i < 11; i++) {
//     //         let newNumber = Math.round(Math.random() * 70);
          
//     //         chartData.push(newNumber);

//     //     }
//     //     console.log( "chart data",chartData)
//     //     return chartData
//     //     // console.log(this.state.dataset, "chart")
//     // } 
//     useEffect(() => {
//         changeData();
//     }, [data]);

//     useEffect(() => {
//         DrawChart();
//     }, [data]);

//     const changeData = () => {
//         setchartData(data[i++]);
//         if(i === data.length) i = 0;
//     }

    
    

//     function plot (chart, width, height)  {
//         // create scales!
//         const xScale = d3.scaleBand()
//             .domain(data.map(d => d.country))
//             .range([0, width]);
//         const yScale = d3.scaleLinear()
//             .domain([0, d3.max(data, d => d.value)])
//             .range([height, 0]);
//         const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

//         chart.selectAll('.bar')
//             .data(data)
//             .enter()
//             .append('rect')
//             .classed('bar', true)
//             .attr('x', d => xScale(d.country))
//             .attr('y', d => yScale(d.value))
//             .attr('height', d => (height - yScale(d.value)))
//             .attr('width', d => xScale.bandwidth())
//             .style('fill', (d, i) => colorScale(i));

//         chart.selectAll('.bar-label')
//             .data(data)
//             .enter()
//             .append('text')
//             .classed('bar-label', true)
//             .attr('x', d => xScale(d.country) + xScale.bandwidth()/2)
//             .attr('dx', 0)
//             .attr('y', d => yScale(d.value))
//             .attr('dy', -6)
//             .text(d => d.value);

//         const xAxis = d3.axisBottom()
//             .scale(xScale);
            
//         chart.append('g')
//             .classed('x axis', true)
//             .attr('transform', `translate(0,${height})`)
//             .call(xAxis);

//         const yAxis = d3.axisLeft()
//             .ticks(5)
//             .scale(yScale);

//         chart.append('g')
//             .classed('y axis', true)
//             .attr('transform', 'translate(0,0)')
//             .call(yAxis);

//         chart.select('.x.axis')
//             .append('text')
//             .attr('x',  width/2)
//             .attr('y', 60)
//             .attr('fill', '#000')
//             .style('font-size', '20px')
//             .style('text-anchor', 'middle')
//             .text('Country');    
            
//         chart.select('.y.axis')
//             .append('text')
//             .attr('x', 0)
//             .attr('y', 0)
//             .attr('transform', `translate(-50, ${height/2}) rotate(-90)`)
//             .attr('fill', '#000')
//             .style('font-size', '20px')
//             .style('text-anchor', 'middle')
//             .text('Government Expenditure in Billion Dollars');   
            
//         const yGridlines = d3.axisLeft()
//             .scale(yScale)
//             .ticks(5)
//             .tickSize(-width,0,0)
//             .tickFormat('')

//         chart.append('g')
//             .call(yGridlines)
//             .classed('gridline', true);
//     };

//    function DrawChart() {
//         const width = 1000;
//         const height = 700;

//         const el = new Element('div');
//         const svg = d3.select(el)
//             .append('svg')
//             .attr('id', 'chart')
//             .attr('width', width)
//             .attr('height', height);

//         const margin = {
//             top: 60,
//             bottom: 100,
//             left: 80,
//             right: 40
//         };

//         const chart = svg.append('g')
//             .classed('display', true)
//             .attr('transform', `translate(${margin.left},${margin.top})`);

//         const chartWidth = width - margin.left - margin.right;
//         const chartHeight = height - margin.top - margin.bottom
//         plot(chart, chartWidth, chartHeight);

//         return el.toReact();
//     };

//     return(
//         <div>

            
//             <DrawChart data={data}/>
          
        
//             <div>
//             <button onClick={changeData}>Create</button>
//             </div>
         
       

//         </div>
       
        
         
//     )

//     // render() {
        
//         // return ()this.drawChart()
            
              
        
        
        
        
//         // <div>
//         //     <button onClick={this.random.bind(this)}>Change</button> 
//         //     <div></div>
//         // </div>
        
//     // }
// }

// import React, { useEffect, useState } from 'react';
// import './App.css';
//import BarChart from './charts/BarChart';

const datas = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30]
]
var i = 0;

function Bar_chart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }


    return (
        <div className="App">
            <h2>Graphs with React</h2>
            <button onClick={changeData}>Change Data</button>
            <Bar_data width={600} height={400} data={data} />
        </div>
    );
}

export default Bar_chart;