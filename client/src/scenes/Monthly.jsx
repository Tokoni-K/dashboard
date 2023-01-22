import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useGetSalesQuery } from "../state/api";
import Header from '../component/Header'

const Monthly = () => {
    const { data } = useGetSalesQuery();
    const theme = useTheme();

    const [formattedData] = useMemo(() => {
        if (!data) return [];

        const { monthlyData } = data;
        const totalSalesLine = {
        id: "totalSales",
        color: "rgb(250, 223, 74)",
        data: [],
        };
        const totalUnitsLine = {
        id: "totalUnits",
        color: "rgb(201, 118, 80)",
        data: [],
        };

        Object.values(monthlyData).forEach(({ month, totalSales, totalUnits }) => {
        totalSalesLine.data = [
            ...totalSalesLine.data,
            { x: month, y: totalSales },
        ];
        totalUnitsLine.data = [
            ...totalUnitsLine.data,
            { x: month, y: totalUnits },
        ];
        });

        const formattedData = [totalSalesLine, totalUnitsLine];
        return [formattedData];
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='my-4 mx-6 overflow-hidden'>
            <Header title="MONTHLY SALES" subtitle="Chart of monthlysales" />
            <div className="h-[75vh] overflow-auto">
                {data ? (
                <ResponsiveLine
                    data={formattedData}
                    theme={{
                    axis: {
                        domain: {
                        line: {
                            stroke: theme.palette.color.text2,
                        },
                        },
                        legend: {
                        text: {
                            fill: theme.palette.color.text2,
                        },
                        },
                        ticks: {
                        line: {
                            stroke: theme.palette.color.text2,
                            strokeWidth: 1,
                        },
                        text: {
                            fill: theme.palette.color.text2,
                        },
                        },
                    },
                    legends: {
                        text: {
                        fill: theme.palette.color.text2,
                        },
                    },
                    tooltip: {
                        container: {
                        color: theme.palette.color.text2,
                        },
                    },
                    }}
                    colors={{ datum: "color" }}
                    margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
                    xScale={{ type: "point" }}
                    yScale={{
                        type: "linear",
                        min: "auto",
                        max: "auto",
                        stacked: false,
                        reverse: false,
                    }}
                    yFormat=" >-.2f"
                    curve="catmullRom"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: "bottom",
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 90,
                        legend: "Month",
                        legendOffset: 60,
                        legendPosition: "middle",
                    }}
                    axisLeft={{
                        orient: "left",
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Total",
                        legendOffset: -50,
                        legendPosition: "middle",
                    }}
                    enableGridX={false}
                    enableGridY={false}
                    pointSize={10}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                    {
                        anchor: "top-right",
                        direction: "column",
                        justify: false,
                        translateX: 50,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: "left-to-right",
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: "circle",
                        symbolBorderColor: "rgba(0, 0, 0, .5)",
                        effects: [
                        {
                            on: "hover",
                            style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1,
                            },
                        },
                        ],
                    },
                    ]}
                />
                ) : (
                <>Loading...</>
                )}
            </div>
        </div>
    )
}

export default Monthly