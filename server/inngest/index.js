import { Inngest } from 'inngest';
import Attendance from '../models/Attendance.js';
import Employee from '../models/Employee.js';
import LeaveApplication from '../models/LeaveApplication.js';

// Create a client to send and receive events
export const inngest = new Inngest({ id: 'fullstack-ems' });

// Auto Check-out for employees
const autoCheckOut = inngest.createFunction(
  {
    id: 'auto-check-out',
    triggers: [{ event: 'employee/check-out' }],
  },
  async ({ event, step }) => {
    const { employeeId, attendanceId } = event.data;

    // Wait for 9 hours
    await step.sleepUntil(
      'wait-for-the-9-hours',
      new Date(new Date().getTime() + 9 * 60 * 60 * 1000),
    );
    // get Attendance data
    let attendance = await Attendance.findById(attendanceId);

    if (!attendance?.checkOut) {
      // get Employee data
      const employee = await Employee.findById(employeeId);

      // Send reminder email

      // After 10 hours, mark attendance as checked out with
      // status "LATE"
      await step.sleepUntil(
        'wait-for-the-1-hour',
        new Date(new Date().getTime() + 1 * 60 * 60 * 1000),
      );

      attendance = await Attendance.findById(attendanceId);
      if (!attendance?.checkOut) {
        attendance.checkOut =
          new Date(attendance.checkIn).getTime() + 4 * 60 * 60 * 1000;
        attendance.workingHours = 4;
        attendance.dayType = 'Half Day';
        attendance.status = 'LATE';
        await attendance.save();
      }
    }
  },
);

// Send email to admin, if admin dosen't take action on leave application within 24 hours
const leaveApplicationReminder = inngest.createFunction(
  {
    id: 'leave-application-reminder',
    triggers: [{ event: 'leave/pending' }],
  },
  async ({ event, step }) => {
    const { leaveApplicationId } = event.data;

    // wait for 24 hours
    await step.sleepUntil(
      'wait-for-the-24-hours',
      new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    );

    const leaveApplication =
      await LeaveApplication.findById(leaveApplicationId);

    if (leaveApplication?.status === 'PENDING') {
      const employee = await Employee.findById(leaveApplication.employeeId);

      // Send reminder email to admin to take action on leave application
    }
  },
);

// Create an empty array where we'll export future Inngest functions
export const functions = [autoCheckOut, leaveApplicationReminder];
