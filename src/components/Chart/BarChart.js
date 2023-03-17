import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const labels = ["Quỹ tăng trưởng", "Quỹ cân bằng", "Quỹ bảo toàn"];

const BarChart = () => {
    const [data, setData] = useState({
        labels: labels,
        datasets: [
            {
                data: [75, -25, 25],
                backgroundColor: ["#E87722", "#6ECEB2", "#FED141"],
                barThickness: 30,
            },
        ],
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const newData = {
                labels: labels,
                datasets: [
                    {
                        data: [
                            Math.floor(Math.random() * 150) - 50,
                            Math.floor(Math.random() * 150) - 50,
                            Math.floor(Math.random() * 150) - 50,
                        ],
                        backgroundColor: ["#E87722", "#6ECEB2", "#FED141"],
                        barThickness: 30,
                    },
                ],
            };
            setData(newData);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

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
    };

    return (
        <div>
            <Bar plugins={[ChartDataLabels]} data={data} options={config} />
        </div>
    );
};

export default BarChart;
