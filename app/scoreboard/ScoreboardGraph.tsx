'use client'

import {useMemo, useState} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import type {GraphEntryData} from '@/util/scoreboard';
import {DateTime} from 'luxon';


export default function ScoreboardGraph(props: {graph: GraphEntryData[]}) {
    const [focused, setFocused] = useState('');

    return (
        <div className="h-[32rem] bg-black/30 rounded p-8 backdrop-blur-sm">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="time"
                        type="number"
                        domain={['auto', 'auto']}
                        tickFormatter={(t) => DateTime.fromMillis(t).toLocaleString()}
                    />
                    <YAxis dataKey="score" />
                    <Tooltip />
                    <Legend
                        onMouseEnter={(data) => setFocused(data.value)}
                        onMouseLeave={() => setFocused('')}
                    />
                    {props.graph.map((p, i) => (
                        <Line
                            dataKey="score"
                            data={p.points}
                            name={p.name}
                            key={p.id}
                            stroke={colors[i]}
                            strokeOpacity={!focused ? 1 : focused === p.name ? 1 : 0.1}
                            strokeWidth={!focused ? 1 : focused === p.name ? 2 : 1}
                            dot={{
                                fillOpacity: !focused ? 1 : focused === p.name ? 1 : 0.1
                            }}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

const colors = [
    '#FF1E1E',
    '#FF3232',
    '#FF4545',
    '#FF5656',
    '#FF6565',
    '#FF7373',
    '#FF8080',
    '#FF8C8C',
    '#FF9696',
    '#FFA0A0'
]
