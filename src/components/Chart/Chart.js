import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import styled from 'styled-components';

const ChartBox = styled.div`
background: #FFFFFF;
border-radius: 4px;
margin: 0 40px;
`



const labels = ["01/07", "11/07", "21/07", "31/07", "10/08"];


export const defaultdata = {
    labels: labels,
    datasets: [
        {
            label: "Quỹ tăng trưởng",
            backgroundColor: "#E87722",
            borderColor: "#E87722",
            data: [56, 22, 57, 34, 11],
        },
        {
            label: "Quỹ cân bằng",
            backgroundColor: "#6ECEB2",
            borderColor: "#6ECEB2",
            data: [22, 12, 21, 63, 77],
        },
        {
            label: "Quỹ Bảo toàn",
            backgroundColor: "#FED141",
            borderColor: "#FED141",
            data: [21, 92, 78, 66, 54],
        },
    ],
};

const LineChart = () => {
    const [data, setData] = useState(defaultdata);
    useEffect(() => {
        const interval = setInterval(() => {
            const newData = data.datasets.map((dataset) => {
                const newDataArray = dataset.data.slice();
                for (let i = 0; i < 5; i++) {
                    newDataArray[i] = Math.floor(Math.random() * 100);
                }
                return { ...dataset, data: newDataArray };
            });

            setData({ ...data, datasets: newData });
        }, 5000);
        return () => clearInterval(interval);
    }, [data])

    return (
        <ChartBox>
            <Line data={data} />
        </ChartBox>
    )
        ;
};

export default LineChart;
