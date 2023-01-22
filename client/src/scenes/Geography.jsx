import React from 'react'
import { useTheme } from "@mui/material";
import { useGetGeographyQuery } from '../state/api';
import Header from '../component/Header';
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../state/geoData";

export const Geography = () => {

    const theme = useTheme();
    const { data } = useGetGeographyQuery();

    return (
        <div className='my-4 mx-6 overflow-y-auto'>
            <Header title="GEOGRAPHY" subtitle="Find where your users are located." />
            <div className='mt-40px h-[75vh] border-[1px] rounded ' style={{ borderColor: theme.palette.color.icon }}>
                {data ? 
                <ResponsiveChoropleth
                    data={data}
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
                            color: theme.palette.color.text,
                            },
                        },
                    }}
                    features={geoData.features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="PuOr"
                    domain={[ 0, 60 ]}
                    unknownColor="#666666"
                    label="properties.name"
                    valueFormat=".2s"
                    projectionScale={115}
                    projectionTranslation={[ 0.5, 0.5 ]}
                    projectionRotation={[ 0, 0, 0 ]}
                    enableGraticule={true}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                    
                    legends={[
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: theme.palette.color.text2,
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: theme.palette.color.text2,
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
                : <div className='p-4'>Loading...</div>}
            </div>
        </div>
    )
}
