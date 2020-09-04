import React, { Component } from 'react'
import Chart from "chart.js";
import { timestampBuff_Unit_A1,Buff_Unit_A1 } from './RandomGen'
import { localDataset } from './WebSocketFetcher';

import classes from "./ChartComp.module.css";

Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.animation.duration = 0;

let theChart;
let theDataset,theTimestamp;

class ChartComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            device: 'Unit_A1'
        }
        this.refSelector = React.createRef();
        //const {device} = this.props;
        //this.changeDevice = this.changeDevice.bind(this);
    }
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }
    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");

        setInterval(function(){
            var deviceSelected = document.getElementById("nama").value;
            switch (deviceSelected) {
                case "Unit_A1":
                    theDataset = [
                        {label: "Voltage 1", data: localDataset[0].voltage1, fill: false, borderColor: "#00FF00"},
                        {label: "Voltage 2", data: localDataset[0].voltage2, fill: false, borderColor: "#FF0000"},
                        {label: "Voltage 3", data: localDataset[0].voltage3, fill: false, borderColor: "#0000FF"},
                        {label: "Voltage 4", data: localDataset[0].voltage4, fill: false, borderColor: "#FFFF00"}
                    ];
                    theTimestamp = localDataset[0].timestamp;
                    //theTimestamp = timestampBuff_Unit_A1[0];
                    break;
                case "Unit_A2":
                    theDataset = [
                        {
                            label: "Voltage 1",
                            data: [10, 12, 11],
                            fill: false,
                            borderColor: "#00FF00"
                        },
                        {
                            label: "Voltage 2",
                            data: [11, 11, 9],
                            fill: false,
                            borderColor: "#FF0000"
                        },
                        {
                            label: "Voltage 3",
                            data: [11, 10, 11],
                            fill: false,
                            borderColor: "#0000FF"
                        },
                        {
                            label: "Voltage 4",
                            data: [9, 11, 11],
                            fill: false,
                            borderColor: "#FFFF00"
                        }
                    ];
                    theTimestamp = ['11.00','11.01','11.02'];
                    break;
                case "Unit_B1":
                    theDataset = [
                        {
                            label: "Voltage 1",
                            data: [10, 10, 10],
                            fill: false,
                            borderColor: "#00FF00"
                        },
                        {
                            label: "Voltage 2",
                            data: [11, 11, 11],
                            fill: false,
                            borderColor: "#FF0000"
                        },
                        {
                            label: "Voltage 3",
                            data: [12, 12, 12],
                            fill: false,
                            borderColor: "#0000FF"
                        },
                        {
                            label: "Voltage 4",
                            data: [9, 11, 11],
                            fill: false,
                            borderColor: "#FFFF00"
                        }
                    ];
                    theTimestamp = ['11.00','11.01','11.02'];
                    break;
                default:
                    theDataset = [
                        {
                            label: "Voltage 1",
                            data: [10, 12, 11],
                            fill: false,
                            borderColor: "#00FF00"
                        },
                        {
                            label: "Voltage 2",
                            data: [11, 11, 9],
                            fill: false,
                            borderColor: "#FF0000"
                        },
                        {
                            label: "Voltage 3",
                            data: [11, 10, 11],
                            fill: false,
                            borderColor: "#0000FF"
                        },
                        {
                            label: "Voltage 4",
                            data: [9, 11, 11],
                            fill: false,
                            borderColor: "#FFFF00"
                        }
                    ];
                    theTimestamp = ['11.00','11.01','11.02'];
                    break;
            }
            

            theChart = new Chart(myChartRef, {
                type: "line",
                data: {
                    //Bring in data
                    labels: theTimestamp,
                    datasets: theDataset
                },
                options: {
                    //Customize chart options
                    // 2 item ini untuk membuat grafik bagus di mobile
                    responsive: true,
                    maintainAspectRatio: false,
                    // atur angka sumbu di sini
                    scales: {
                        yAxes: [{
                            ticks: {
                                //nilai minimal sumbu y
                                suggestedMin: 0,
                                //nilai maksimal sumbu y
                                suggestedMax: 15
                            }
                        }]
                    }
                }
            });

        //aslinya setinterval disini
            var deviceSelected = document.getElementById("nama").value;
            document.getElementById("Label1").innerHTML = "<b>Voltage 1 : </b>" + String(localDataset[0].voltage1[localDataset[0].voltage1.length-1]);
            document.getElementById("Label2").innerHTML = "<b>Voltage 2 : </b>" + String(localDataset[0].voltage2[localDataset[0].voltage2.length-1]);
            document.getElementById("Label3").innerHTML = "<b>Voltage 3 : </b>" + String(localDataset[0].voltage3[localDataset[0].voltage3.length-1]);
            document.getElementById("Label4").innerHTML = "<b>Voltage 4 : </b>" + String(localDataset[0].voltage4[localDataset[0].voltage4.length-1]);
            theChart.data.labels = localDataset[0].timestamp;
            console.log(theChart.data);
            theChart.data.datasets = theDataset;
            //theChart.updateData()  
            /*
            theChart.data.labels.shift();
            theChart.data.labels.push(localDataset[0].timestamp[20]);
            */
            /*
            theChart.data.datasets.shift();
            theChart.data.datasets.voltage1.push(localDataset[0].voltage1[localDataset[0].voltage1.length-1]);
            theChart.data.datasets.voltage2.push(localDataset[0].voltage2[localDataset[0].voltage2.length-1]);
            theChart.data.datasets.voltage3.push(localDataset[0].voltage3[localDataset[0].voltage3.length-1]);
            theChart.data.datasets.voltage4.push(localDataset[0].voltage4[localDataset[0].voltage4.length-1]);
            */
            theChart.update();
            console.log('Chart Updated!');
          },2000);
          
    }

    render() {
        return (
            <div>
                <div>
                    <p>
                        <span id="Label1"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label2"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label3"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label4"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                    </p>
                </div>
                <div className={classes.graphContainer}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
            </div>
        );
    }
}

export default ChartComp;