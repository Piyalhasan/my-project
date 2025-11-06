<?php
// Database connection setup
$servername = "localhost";
$username = "root"; // default XAMPP username
$password = ""; // default has no password
$dbname = "hostel_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$room = $_POST['room_number'];
$block = $_POST['block_number'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$issue = $_POST['issue_type'];
$comment = $_POST['comment'];

// Insert into database
$sql = "INSERT INTO issues (room_number, block_number, email, phone, issue_type, comment)
        VALUES ('$room', '$block', '$email', '$phone', '$issue', '$comment')";

if ($conn->query($sql) === TRUE) {
  echo "
  <script>
    alert('✅ Issue Submitted Successfully!');
    window.location.href='index.html';
  </script>
  ";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
