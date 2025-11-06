document.getElementById("issueForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const room = document.getElementById("roomNumber").value;
  const block = document.getElementById("blockNumber").value;
  const issue = document.getElementById("issueType").value;
  const comment = document.getElementById("comment").value;

  alert(`✅ Issue Submitted!\n\nRoom: ${room}\nBlock: ${block}\nIssue: ${issue}\nComment: ${comment}`);
  this.reset();
});
