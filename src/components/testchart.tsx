// import React from 'react';
import Chart from '../components/Chart';
import '../style/charts.css';



const SampleData = () => {
    const linechartdata = {
        // x-axis
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'payments per month',
                // y-axis
                data: [10, 20, 30, 40, 50],
                backgroundColor: 'rgb(0,204,221)',
                borderColor: 'rgb(0,204,221)',
                borderWidth: 1
            },
        ],
    };
    const barchartdata = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'housebills per month',
                // y-axis
                data: [10, 20, 30, 40, 50],
                backgroundColor: 'rgb(0,204,221)',
                borderColor: 'rgb(0,204,221)',
                borderWidth: 1
            },
        ],
    };
    return(
        <>
        <div className = 'chart-container'>
        <div className='linegraph'>
            <Chart 
             chartData = {linechartdata}
             chartType='line' />
        </div>
        <div className='bargraph'>
        <Chart 
             chartData = {barchartdata}
             chartType='bar' /> 
        </div>
        </div>
        </>
    )
}

export default SampleData;