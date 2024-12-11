import React from "react";
import './Overview.css';  // เพิ่มไฟล์ CSS แยก

function Overview() {
    return (
        <div className="row">
            <div className="overview-item active overview-left">
                <h1 className="overview-title">
                    ภาพรวมโรงแรม
                </h1>
                <p className="overview-text">
                    นอกจากที่พักจะได้รับการรับรองมาตรฐาน SHA ที่พักยังมีบริการ Wi-Fi ฟรี ในทุกห้องพัก และที่จอดรถฟรี ที่พักตั้งอยู่ในย่านตัวเมืองหนองคาย จึงอยู่ใกล้กับที่เที่ยวมากมาย และสะดวกต่อการเดินทางไปสถานที่ต่างๆ ทริปยังไม่จบถ้าไม่ได้แวะไปที่เที่ยวชื่อดังอย่างสะพานมิตรภาพไทย-ลาว ที่พัก 3 ดาวคุณภาพสูงแห่งนี้มีบริการนวด, สระว่ายน้ำกลางแจ้ง และห้องอาหารคอยอำนวยความสะดวกแก่ผู้เข้าพัก
                </p>
            </div>

            <div className="overview-item overview-right">
                <h1 className="overview-title">
                    บริการเด่น
                </h1>
                <ul className="overview-list">
                    <li>1. บริการขนส่งสาธารณะในระยะ 650 เมตร</li>
                    <li>2. แผนกต้อนรับ (24 ชั่วโมง)</li>
                    <li>3. ใจกลางเมือง</li>
                    <li>4. Wi-Fi ทุกห้อง (ฟรี)</li>
                    <li>5. คาราโอเกะ</li>
                </ul>
            </div>
            
            <div className="overview-item">
                <h1 className="overview-title">
                    โปรโมชั่น
                </h1>
                <h6 className="overview-subtitle">1. โปรโมชั่นจองล่วงหน้า (Early Bird)</h6>
                <p className="overview-text">
                    รายละเอียด: ลด 20% สำหรับการจองห้องพักล่วงหน้า 30 วัน ลด 10% สำหรับการจองล่วงหน้า 15 วัน
                    ระยะเวลา: ตั้งแต่วันนี้ถึง 31 ธันวาคม 2024
                </p>

                <h6 className="overview-subtitle">2. พักนานคุ้มกว่า (Stay Longer, Pay Less)</h6>
                <p className="overview-text">
                    รายละเอียด: เข้าพัก 3 คืน ฟรี 1 คืน ส่วนลด 30% สำหรับการจอง 7 คืนขึ้นไป
                    เงื่อนไข: โปรโมชั่นนี้ใช้ได้สำหรับทุกประเภทห้องพัก
                </p>
            </div>
        </div>
    );
}

export default Overview;
