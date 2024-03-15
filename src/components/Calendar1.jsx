import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { ordersData } from '../../public/data/dummyData';
export default function Calendar1() {
  const [date, setDate] = useState(new Date());
  const [selectedRecords, setSelectedRecords] = useState([]);
  function getDate(d)
{
    var day, month, year;

    result = d.match("[0-9]{2}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{4}");
    if(null != result) {
        dateSplitted = result[0].split(result[1]);
        day = dateSplitted[0];
        month = dateSplitted[1];
        year = dateSplitted[2];
    }
    result = d.match("[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}");
    if(null != result) {
        dateSplitted = result[0].split(result[1]);
        day = dateSplitted[2];
        month = dateSplitted[1];
        year = dateSplitted[0];
    }

    if(month>12) {
        aux = day;
        day = month;
        month = aux;
    }
      console.log(year+"/"+month+"/"+day)
    return year+"/"+month+"/"+day;

}

function filterRecordsByDate(ordersData, selectedDate) {
  const dateString = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
  return ordersData.filter(record => record.dDate === dateString);
}


  return (
    <div style={{color:'#5a189a'}}>
      <Calendar 
        onChange={(selectedDate) => {
          setDate(selectedDate);
          const filteredRecords = filterRecordsByDate(ordersData, selectedDate);
          setSelectedRecords(filteredRecords);
        }}
        value={date}
        style={{ height: '300px', color: '#5a189a' }}
      />
      <span className='bold' style={{ color: '#5a189a' }}>
        Number of Orders to be delivered:{' '}
      </span>
      {selectedRecords.length > 0 && (
        <span style={{ color: '#5a189a' }}>{selectedRecords.length !== undefined ? selectedRecords.length : 0}</span>
      )}
      {console.log(date)}
      {console.log(selectedRecords.length)}
    </div>
  )
}
