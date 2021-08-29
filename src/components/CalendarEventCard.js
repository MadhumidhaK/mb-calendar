import React, { useState } from "react";
import CalendarEventForm from "./CalendarEventForm";

export default function CalendarEventCard({ event, setRefresh }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    let start = event.startTime.split(" ");
    let end = event.endTime.split(" ");
    return (
        <div className="card">
            <div className="flex">
                <div>
                    <div className="card-item">{event.name}</div>
                    <div className="card-item">{start[1]} - {end[1]}</div>
                </div>
                <div>
                    <div className="card-item action-icon" onClick={() => {
                    setIsEditModalOpen(true)
                }}><i class="icon-edit"></i></div>
                    <div className="card-item action-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg></div>
                </div>
            </div>
            {isEditModalOpen ? <CalendarEventForm setRefresh={setRefresh} setIsModalOpen={setIsEditModalOpen} isEdit event={event} /> : <></>}
        </div>
    )
}