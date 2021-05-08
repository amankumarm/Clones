import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from 'apexcharts'
import '../../assets/graph.css'
export class graph extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
                series: [{
                  name: 'series1',
                  data: [31, 40, 28, 51, 42, 109, 100]
                }, {
                  name: 'series2',
                  data: [11, 32, 45, 32, 34, 52, 41]
                }],
                options: {
                  chart: {
                    height:"auto",
                    type: 'area'
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'smooth'
                  },
                  xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
                    show:true,
                    labels: {
                      show: true,
                      rotate: -45,
                      rotateAlways: false,
                      hideOverlappingLabels: true,
                      showDuplicates: false,
                      trim: false,
                      minHeight: undefined,
                      maxHeight: 120,
                      style: {
                        colors: ["white"],
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                    },
                    crosshairs:{
                      show:false
                    }
                  },
                  yaxis:{
                    show:true,
                    
                    labels: {
                      show: true,
                      align: 'left',
                      minWidth: 0,
                      maxWidth: 160,
                      style: {
                          colors: ["white"],
                          fontSize: '12px',
                          fontFamily: 'poppins',
                          fontWeight: 400,
                          cssClass: 'apexcharts-yaxis-label',
                      }
                    }
                  },
                  title: {
                    text: "Design Summary",
                    align: 'left',
                    offsetX: 50,
                    offsetY: 20,
                    floating: false,
                    style: {
                      fontSize:  '14px',
                      fontWeight:  'bold',
                      fontFamily:"poppins",
                      color:  'white'
                    },
                },
                  dataLabels:{
                    enabled:false
                  },
                  tooltip: {
                   enabled:false
                  },
                  grid: {
                    show: true,
                    borderColor: '#90A4AE',
                    strokeDashArray: 0,
                    position: 'back',
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },   
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },  
                    row: {
                        colors: undefined,
                        opacity: 0.1
                    },  
                    column: {
                        colors: undefined,
                        opacity: 0.1
                    },  
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },  
                }
                }
              }
    }
    
    render() {
        return (
            <div  className="graph">
                  <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        )
    }
}

export default graph
