import React from 'react';
import { ResponsivePie } from "@nivo/pie";
import { useGetSalesQuery } from "../state/api";
import { useTheme } from '@mui/material';

const BreakdownChart = ({ isDashboard = false }) => {
    
    const { data, isLoading } = useGetSalesQuery();
    const theme = useTheme();

    if (!data || isLoading) return "Loading...";
    
    const colors = [
        "rgb(201, 118, 80)",
        "rgb(250, 223, 74)",
        "rgb(250, 223, 74)",
        "rgb(201, 118, 80)",
    ];
    const formattedData = Object.entries(data.salesByCategory).map(
        ([category, sales], i) => ({
        id: category,
        label: category,
        value: sales,
        color: colors[i],
        })
    );
    
    return (
        <div className={`relative ${isDashboard ? "h-10" : "h-[100%]"} ${isDashboard ? "min-h-[320px]" : undefined} ${isDashboard ? "min-w-[325px]" : undefined}`}>
            <ResponsivePie
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
                margin={
                isDashboard
                    ? { top: 40, right: 75, bottom: 100, left: 55 }
                    : { top: 60, right: 80, bottom: 140, left: 80 }
                }
                colors={{ datum: "data.color" }}
                sortByValue={true}
                innerRadius={0.45}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
                }}
                enableArcLinkLabels={!isDashboard}
                arcLinkLabelsTextColor={theme.palette.color.text2}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
                }}
                legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: isDashboard ? 20 : 0,
                    translateY: isDashboard ? 50 : 56,
                    itemsSpacing: 0,
                    itemWidth: 85,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                    {
                        on: "hover",
                        style: {
                        itemTextColor: theme.palette.color.text2,
                        },
                    },
                    ],
                },
                ]}
            />
            <div className={`absolute top-20 sm:top-1/2 left-1/2 text-${theme.palette.color.text2} pointer-events-none`} 
            style={{ transform: isDashboard ? "translate(-75%, -170%)"
            : "translate(-50%, -100%)",
        }}>
                <p>{!isDashboard && "Total:"} ${data.yearlySalesTotal}</p>
            </div>
        </div>
    )
}

export default BreakdownChart