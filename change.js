// Simple behavior: validate reason and show a friendly confirmation
document.addEventListener("DOMContentLoaded", function () {
  const submit = document.getElementById("submitBtn");
  const reason = document.getElementById("reason");
  const block = document.getElementById("blockSelect");
  const room = document.getElementById("roomSelect");

  submit.addEventListener("click", function () {
    const r = reason.value.trim();
    if (!r) {
      alert("Please enter a reason for change.");
      reason.focus();
      return;
    }

    // collect data (in real app send to server using fetch/AJAX)
    const payload = {
      fromRoom: "201",
      fromBlock: "B",
      toBlock: block.value,
      toRoom: room.value,
      reason: r
    };

    // Simulate a submit
    console.log("Submitting:", payload);
    // Friendly confirmation to user
    alert("Request submitted:\nBlock " + payload.toBlock + " - Room " + payload.toRoom + "\nReason saved.");
    // clear reason (optional)
    reason.value = "";
  });
});