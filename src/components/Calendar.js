import React, { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';
import CalendarEvent from './CalendarEvent';
import CalendarEventCard from './CalendarEventCard';

export default function Calendar({ data, isAllPlan, setRefresh }) {

    if (!isAllPlan) {
        return (
            <div style={{margin: "0 10%"}}>
                {data.map((d, i) => <CalendarEventCard setRefresh={setRefresh} key={i} event={d} />)}

            </div>
        )
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <table className="list">
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Start Time
                    </th>
                    <th>
                        End Time
                    </th>
                    <th></th>
                </tr>
                {data.map((d, i) => <CalendarEvent setRefresh={setRefresh} key={i} event={d} />)}
            </table>
        </div>
    )
}