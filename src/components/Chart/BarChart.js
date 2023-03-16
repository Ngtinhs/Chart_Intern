import React from 'react'
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const labels = ["01/07", "11/07", "21/07", "31/07", "10/08"];

const data = {
    labels: labels,
    datasets: [
        {
            data: [56, 22, 57, 34, 11],
            borderColor: "#E87722",
            backgroundColor: "#E87722",
        },
    ]
};

const config = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        datalabels: {
            color: "#0a3b32",
            font: {
                weight: "bold",
                size: "16px",
            },
            anchor: function (context) {
                const dataValue =
                    context.dataset.data[context.dataIndex];
                return dataValue < 0 ? "start" : "end";
            },
            align: function (context) {
                const dataValue =
                    context.dataset.data[context.dataIndex];
                return dataValue < 0 ? "left" : "right";
            },
            formatter: function (value, context) {
                const dataValue =
                    context.dataset.data[context.dataIndex];

                if (dataValue === 0) {
                    return "";
                }
                return dataValue + "%";
            },
        },
    },
    barPercentage: 2,
    scales: {
        x: {
            min: -50,
            max: 100,

            ticks: {

                stepSize: 25,
                color: "#0a3b32",
                font: {
                    weight: "bold",
                    size: 12,
                },
            },
        },
        y: {
            ticks: {
                padding: 2,
                color: "#0a3b32",
                alignment: 'center',
                font: {
                    weight: "500",
                    size: 18,
                },
            },

            grid: { color: "transparent" },
        },
    },
}

const BarChart = () => {
    return (
        <div>
            <Bar data={data}
                plugins={[ChartDataLabels]}
                options={config}

            />
        </div>
    )
}

export default BarChart
