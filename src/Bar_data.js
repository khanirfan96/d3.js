// const data =[
//      [
//     {
//         country: 'India',
//         value: 273
//     },
//     {
//         country: 'USA',
//         value: 2420
//     },
//     {
//         country: 'China',
//         value: 1270
//     },
//     {
//         country: 'UK',
//         value: 553
//     },
//     {
//         country: 'Germany',
//         value: 731
//     },
//     {
//         country: 'Sweden',
//         value: 136
//     },
//     {
//         country: 'France',
//         value: 682
//     },
//     {
//         country: 'Australia',
//         value: 239
//     },
//     {
//         country: 'Canada',
//         value: 367
//     },
//     {
//         country: 'Brazil',
//         value: 442
//     }
// ],
// [
//     {
//         country: 'India',
//         value: 450
//     },
//     {
//         country: 'USA',
//         value: 600
//     },
//     {
//         country: 'China',
//         value: 800
//     },
//     {
//         country: 'UK',
//         value: 360
//     },
//     {
//         country: 'Germany',
//         value: 725
//     },
//     {
//         country: 'Sweden',
//         value: 786
//     },
//     {
//         country: 'France',
//         value: 580
//     },
//     {
//         country: 'Australia',
//         value: 190
//     },
//     {
//         country: 'Canada',
//         value: 432
//     },
//     {
//         country: 'Brazil',
//         value: 777
//     }
// ],
// [
//     {
//         country: 'India',
//         value: 180
//     },
//     {
//         country: 'USA',
//         value: 540
//     },
//     {
//         country: 'China',
//         value: 280
//     },
//     {
//         country: 'UK',
//         value: 250
//     },
//     {
//         country: 'Germany',
//         value: 560
//     },
//     {
//         country: 'Sweden',
//         value: 444
//     },
//     {
//         country: 'France',
//         value: 678
//     },
//     {
//         country: 'Australia',
//         value: 341
//     },
//     {
//         country: 'Canada',
//         value: 445
//     },
//     {
//         country: 'Brazil',
//         value: 350
//     }
// ]
// ];

// export default data;

import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function Bar_data({ width, height, data }){
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            // .style("border", "1px solid black")
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {
        
        const svg = d3.select(ref.current);
        var selection = svg.selectAll("rect").data(data);
        var xScale = d3.scaleLinear()
                            .domain([0, d3.max(data)])
                            .range([0, width-100]);
        var yScale = d3.scaleLinear()
                            .domain([0, d3.max(data)])
                            .range([0, height-100]);
        
            var x_axis = d3.axisTop()
            .scale(xScale);

            var y_axis = d3.axisLeft()
            .scale(yScale);

            svg.append("g")
            .attr("transform", "translate(50, 10)")
            .call(x_axis);

            svg.append("g")
            .attr("transform", "translate(50, 10)")
            .call(y_axis);
        
        selection
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "orange")
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))
        
        selection
            .exit()
            .transition().duration(300)
                .attr("y", (d) => height)
                .attr("height", 0)
            .remove()
    }


    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
        
    )

}

export default Bar_data;