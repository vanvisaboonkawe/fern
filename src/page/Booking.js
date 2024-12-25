import React, { useState } from "react";

function Booking() {
  // ตัวแปรเพื่อเก็บข้อมูลห้องพัก
  const roomsData = [
    { id: 1, name: "ห้องพักมาตรฐาน", description: "ห้องพักพร้อมเตียงเดี่ยว", price: 1000 },
    { id: 2, name: "ห้องพักดีลักซ์", description: "ห้องพักพร้อมเตียงคู่และวิวทะเล", price: 2000 },
    { id: 3, name: "ห้องพักซูพีเรีย", description: "ห้องพักที่กว้างขวางพร้อมสิ่งอำนวยความสะดวก", price: 3000 },
  ];

  // ตัวแปรใน React State เพื่อเก็บสถานะการจอง
  const [bookedRooms, setBookedRooms] = useState([]);

  // ฟังก์ชันในการจองห้อง
  const bookRoom = (roomId) => {
    const roomToBook = roomsData.find(room => room.id === roomId);
    if (roomToBook) {
      setBookedRooms([...bookedRooms, roomToBook]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>จองห้องพัก</h1>
      <p>เลือกห้องพักที่คุณต้องการจอง</p>
      
      <div className="rooms-list">
        {roomsData.map(room => (
          <div key={room.id} className="room-card" style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p>ราคา: ฿{room.price}</p>
            <button onClick={() => bookRoom(room.id)} style={{ padding: "5px 15px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
              จอง
            </button>
          </div>
        ))}
      </div>

      {/* แสดงห้องที่จองแล้ว */}
      {bookedRooms.length > 0 && (
        <div>
          <h2>ห้องที่คุณจองแล้ว</h2>
          <ul>
            {bookedRooms.map((room, index) => (
              <li key={index}>{room.name} - ฿{room.price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Booking;
