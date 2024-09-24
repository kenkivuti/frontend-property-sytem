import React from 'react';
import  {Bar,Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    RadialLinearScale
  } from "chart.js";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    RadialLinearScale
  );




interface ChartProps{
    chartData: any;
    chartType: 'bar'| 'line';

}

const Chart:React.FC<ChartProps> = ({chartData,chartType}) => {
    
    return(
        <div className="chart">
            { chartType === 'bar' ? (
                <Bar data={chartData} />
            ) : (
                <Line data={chartData}/>
            )}
        </div>
    )
}

export default Chart;