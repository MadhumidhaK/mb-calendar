import React from "react";
import { useForm } from "../hooks/useForm";
import "./calendar.css";

export default function CalendarEventForm({ setIsModalOpen, setRefresh, isEdit, event }) {
    let initialValues = {
        name: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        occurrence: 0
    }

    let occurrenceValues = {
        none: 0,
        daily: 1,
        weekly: 2,
        monthly: 3
    }
    console.log(event)
    if (isEdit) {
        let start = event.startTime.split(" ");
        let end = event.endTime.split(" ");
        initialValues = {
            name: event.name,
            startDate: start[0],
            startTime: start[1],
            endDate: end[0],
            endTime: end[1],
            occurrence: event.occurrence,
            pcId: event.pcId
        }
    }
    const successCB = () => { }
    const errorCB = () => { }
    const validate = () => { }
    const { handleChange, handleSubmit, values, setValues, response, responseStatusCode, errors, isLoading } = useForm(initialValues, validate, successCB, errorCB)

    return (
        <div className="backdrop">
            <div className="form">
                <div className="form-item">Name:<input type="text" name="name" value={values.name} onChange={handleChange} /> </div>
                <div className="form-item">Start Time:<input type="time" name="startTime" value={values.startTime} onChange={handleChange} /></div>
                <div className="form-item">End Time:<input type="time" name="endTime" value={values.endTime} onChange={handleChange} /></div>
                <div>Do you want to repeat the Event?</div>
                <div className="flex m-10">
                    <div style={{ width: "50%" }}>
                        <label htmlFor="none" className="radio-label"
                            style={{ background: `${occurrenceValues.none == values.occurrence ? '#a5f1a5' : '#f2f2f2'}` }}>No</label>
                        <input className="radio" type="radio" id="none" name="occurrence" value={occurrenceValues.none} checked={occurrenceValues.none == values.occurrence} onChange={handleChange} />
                    </div>
                    <div style={{ width: "50%" }}>

                        <label htmlFor="daily" className="radio-label" style={{ background: `${occurrenceValues.daily == values.occurrence ? '#a5f1a5' : '#f2f2f2'}` }}>Daily</label>
                        <input className="radio" type="radio" id="daily" name="occurrence" value={occurrenceValues.daily} checked={occurrenceValues.daily == values.occurrence} onChange={handleChange} /></div>
                </div>
                <div className="flex m-10">
                    <div style={{ width: "50%" }}>
                        <label htmlFor="weekly" className="radio-label" style={{ background: `${occurrenceValues.weekly == values.occurrence ? '#a5f1a5' : '#f2f2f2'}` }}>Weekly</label>
                        <input className="radio" type="radio" id="weekly" name="occurrence" value={occurrenceValues.weekly} checked={occurrenceValues.weekly == values.occurrence} onChange={handleChange} /></div>
                    <div style={{ width: "50%" }}><label htmlFor="monthly" className="radio-label" style={{ background: `${occurrenceValues.monthly == values.occurrence ? '#a5f1a5' : '#f2f2f2'}` }}>Monthly</label><input className="radio" type="radio" id="monthly" name="occurrence" value={occurrenceValues.monthly} checked={occurrenceValues.monthly == values.occurrence} onChange={handleChange} /></div>
                </div>
                <div className="flex m-10">
                    {isEdit ? <button onClick={(e) => {
                        setIsModalOpen(false)
                        handleSubmit(e, "http://mbcalender-env.eba-m6mm5ms7.ap-south-1.elasticbeanstalk.com:8080/api/calender/update", {}, "PUT", () => {setRefresh(true) } )
                    }}>Save</button> : <button  onClick={(e) => {
                        handleSubmit(e, "http://mbcalender-env.eba-m6mm5ms7.ap-south-1.elasticbeanstalk.com:8080/api/calender/create", {}, "POST", () => {setRefresh(true) } )
                    }}>Add</button>}
                    <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}


//
//[{"pcId":4,"name":"Sam","startTime":"2021-08-29 19:00","endTime":"2021-08-29 20:30","occurrence":0,"createdAt":"2021-08-29T14:56:18.000+00:00","updatedAt":"2021-08-29T14:56:18.000+00:00"},{"pcId":5,"name":"Tom","startTime":"2021-08-29 19:00","endTime":"2021-08-29 20:30","occurrence":2,"createdAt":"2021-08-29T14:56:53.000+00:00","updatedAt":"2021-08-29T14:56:53.000+00:00"},{"pcId":6,"name":"Tim","startTime":"2021-08-29 19:00","endTime":"2021-08-29 20:30","occurrence":3,"createdAt":"2021-08-29T15:05:34.000+00:00","updatedAt":"2021-08-29T15:05:34.000+00:00"},{"pcId":3,"name":"Kala","startTime":"2021-08-29 21:00","endTime":"2021-08-29 22:00","occurrence":1,"createdAt":"2021-08-29T13:47:27.000+00:00","updatedAt":"2021-08-29T13:48:30.000+00:00"},{"pcId":2,"name":"Madhu","startTime":"2021-08-30 01:00","endTime":"2021-08-30 01:30","occurrence":1,"createdAt":"2021-08-29T13:47:09.000+00:00","updatedAt":"2021-08-29T13:47:09.000+00:00"}]


// [{"pcId":2,"name":"Madhu","startTime":"2021-08-30 01:00","endTime":"2021-08-30 01:30","occurrence":1,"createdAt":"2021-08-29T13:47:09.000+00:00","updatedAt":"2021-08-29T13:47:09.000+00:00"},{"pcId":3,"name":"Kala","startTime":"2021-08-29 21:00","endTime":"2021-08-29 22:00","occurrence":1,"createdAt":"2021-08-29T13:47:27.000+00:00","updatedAt":"2021-08-29T13:48:30.000+00:00"},{"pcId":4,"name":"Sam","startTime":"2021-08-29 19:00","endTime":"2021-08-29 20:30","occurrence":0,"createdAt":"2021-08-29T14:56:18.000+00:00","updatedAt":"2021-08-29T14:56:18.000+00:00"},{"pcId":5,"name":"Tom","startTime":"2021-08-22 19:00","endTime":"2021-08-02 20:30","occurrence":2,"createdAt":"2021-08-29T14:56:53.000+00:00","updatedAt":"2021-08-29T14:56:53.000+00:00"},{"pcId":6,"name":"Tim","startTime":"2021-08-29 19:00","endTime":"2021-08-29 20:30","occurrence":3,"createdAt":"2021-08-29T15:05:34.000+00:00","updatedAt":"2021-08-29T15:05:34.000+00:00"},{"pcId":7,"name":"Doc","startTime":"2021-08-30 16:00","endTime":"2021-08-30 17:30","occurrence":3,"createdAt":"2021-08-29T15:15:26.000+00:00","updatedAt":"2021-08-29T15:15:26.000+00:00"}]