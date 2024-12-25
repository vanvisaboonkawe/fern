import React from "react";

function Contact() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>ติดต่อเรา</h1>
      <p>หากคุณมีคำถามหรือต้องการข้อมูลเพิ่มเติม, คุณสามารถติดต่อเราได้ทางช่องทางด้านล่าง:</p>

      <div>
        <h3>ข้อมูลการติดต่อ</h3>
        <p>Email: info@example.com</p>
        <p>โทรศัพท์: 012-345-6789</p>
      </div>

      <div>
        <h3>แบบฟอร์มติดต่อ</h3>
        <form>
          <div>
            <label htmlFor="name">ชื่อ:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">อีเมล:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">ข้อความ:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div>
            <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>ส่งข้อความ</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
