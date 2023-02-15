/*
IC-07
2/15/2023
*/

const FRAME_HEIGHT = 1500;
const FRAME_WIDTH = 2500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

// Binding data

const data2 = [55000, 48000, 27000, 66000, 90000];

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const FRAME3 = d3.select("#vis3")
                    .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame");

// Scaling functions

const MAX_Y = d3.max(data2, (d) => {return d;});
console.log("Max Y: " + MAX_Y);

// scale function
const Y_SCALE = d3.scaleLinear()
                    .domain([0, (MAX_Y + 100000)])
                    .range([0, VIS_HEIGHT]);

FRAME3.selectAll("points")
        .data(data2)
        .enter()
        .append("circle")
            .attr("cx", MARGINS.left)
            .attr("cy", (d) => {
                return (Y_SCALE(d) + MARGINS.top);
            })
            .attr("r", 20)
            .attr("class", "point");

// add an axis
FRAME3.append("g")
        .attr("transform", 
            "translate(" + MARGINS.top + "," + (VIS_HEIGHT + MARGINS.right + ")"))
        .call(d3.axisTop(Y_SCALE).ticks(4))
            .attr("font-size", "20px");



