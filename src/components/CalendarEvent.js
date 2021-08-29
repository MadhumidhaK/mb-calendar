import React, { useState } from "react";
import CalendarEventForm from "./CalendarEventForm";

export default function CalendarEvent({ event, setRefresh }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    let start = event.startTime.split(" ");
    let end = event.endTime.split(" ");
    return (
        <tr>
            <td>
                {event.name}
            </td>
            <td>
                {start[1]}
            </td>
            <td>
                {end[1]}
            </td>
            <td>
                <button onClick={() => {
                    setIsEditModalOpen(true)
                }}>Edit</button>
                {isEditModalOpen ? <CalendarEventForm setRefresh={setRefresh} setIsModalOpen={setIsEditModalOpen} isEdit event={event} /> : <></>}
            </td>
        </tr>
    )
}