import React from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Layout from '../components/Layout';

function CalendarPage() {
  const currentDate = new Date();

  return (
    <Layout>
      <div className="h-screen">
        <Calendar
          date={currentDate}
          onChange={date => console.log(date)}
        />
      </div>
    </Layout>
  );
}

export default CalendarPage;
