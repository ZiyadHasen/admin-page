"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer, SlotInfo } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Modal, Input, Button, Text } from "@nextui-org/react"; // Next UI components

// Import Korean locale
import "moment/locale/ko";

moment.locale("ko"); // Set moment to use Korean locale
const localizer = momentLocalizer(moment);

// Define the shape of the event object
interface Event {
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    start: new Date(),
    end: new Date(),
  });
  const [visible, setVisible] = useState<boolean>(false); // Modal visibility state

  const handler = () => setVisible(true); // Open modal
  const closeHandler = () => setVisible(false); // Close modal

  const handleAddEvent = () => {
    // Add new event to the list
    setEvents([...events, { ...newEvent }]);
    // Clear the event form and close modal
    setNewEvent({ title: "", start: new Date(), end: new Date() });
    setVisible(false);
  };

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    // Update new event's start and end dates from selected slot
    setNewEvent({ ...newEvent, start: slotInfo.start, end: slotInfo.end });
    handler(); // Open the modal
  };

  return (
    <div style={{ height: "80vh", padding: "20px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month"]}
        selectable
        onSelectSlot={handleSelectSlot} // Trigger event when a slot is selected
        // Korean day names and month formatting
        formats={{
          dayFormat: "ddd", // e.g., 월, 화, 수 (Short format for days in Korean)
          weekdayFormat: (date, culture, localizer) =>
            localizer.format(date, "dddd", culture), // Full day name format
        }}
      />

      {/* Next UI Modal for Event Input */}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Add New Event
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            label="Event Title"
            placeholder="Enter event title"
            fullWidth
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={handleAddEvent}>
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyCalendar;
