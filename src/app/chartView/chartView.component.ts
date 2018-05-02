import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

const DATA: {xvalue:number, yvalue:number}[] = [
    {
        xvalue: 10,
        yvalue: 10
    },
    {
        xvalue: 20,
        yvalue: 20
    },
    {
        xvalue: 30,
        yvalue: 50
    },
    {
        xvalue: 40,
        yvalue: 150
    },
    {
        xvalue: 50,
        yvalue: 175
    }
]

@Component({
    selector: 'chartView',
    templateUrl: 'chartView.template.html'
})
export class ChartViewComponent implements OnInit {

    //private w:number = 300;
    //private h:number = 300;
    //private padding: number = 2;
    private dataset: number[] = [5, 10, 14, 20, 25];

    constructor() { }

    ngOnInit() {
        this.setupBarGraph();
     }

    private setupBarGraph() {
        let h = 300;
        let w = 320;
        let padding: number = 2;

        let svg = d3.select('#chartView').append('svg')
                    .attr('width', w)
                    .attr('height', h);

        svg.selectAll('rect')
            .data(DATA)
            .enter()
            .append('rect')
                .attr('x', (d, i) => (i * (w / DATA.length)) + 20)
                .attr('y', (d) => (h - d.yvalue) - 25)
                .attr('width', (d) => (w / DATA.length) - padding)
                .attr('height', (d) => d.yvalue)
                .attr('fill', 'darkblue');

        svg.selectAll('text')
            .data(DATA)
            .enter()
            .append('text')
            .text((d) => d.xvalue)
                .attr('text-anchor', 'middle')
                .attr('fill', 'red')
                .attr('x', (d, i) => {
                        console.log('X label is:' + d.xvalue);
                        return (i * (w / DATA.length)) + 45; })
                .attr('y', (d) => h );


        // svg.selectAll('text')
        //     .data(DATA)
        //     .enter()
        //     .append('text')
        //     .text((d) => d.xvalue)
        //         .attr('text-anchor', 'middle')
        //         .attr('fill', 'red')
        //         .attr('x', (d, i) => {
        //                 console.log('X label is:' + d.xvalue);
        //                 return 0 })
        //         .attr('y', (d) => h );

    }
}