CREATE DATABASE hostel_db;

USE hostel_db;

CREATE TABLE issues (
  id INT AUTO_INCREMENT PRIMARY KEY,
  room_number VARCHAR(20),
  block_number VARCHAR(20),
  email VARCHAR(100),
  phone VARCHAR(20),
  issue_type VARCHAR(50),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
