

document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".clickable-row");

  rows.forEach(row => {
    row.addEventListener("click", function () {
      // Toggle the "table-active" class on click
      this.classList.toggle("table-active");
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".toggle-status-on").addEventListener("click", function () {
    document.querySelectorAll(".clickable-row.table-active").forEach(row => {
      let statusCell = row.querySelector(".status"); // Find the status cell

      statusCell.textContent = "Active";
      statusCell.classList.remove("text-warning");
      statusCell.classList.add("text-success");


      row.classList.remove("table-active");
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".toggle-status-off").addEventListener("click", function () {
    document.querySelectorAll(".clickable-row.table-active").forEach(row => {
      let statusCell = row.querySelector(".status"); // Find the status cell

      statusCell.textContent = "Inactive";
      statusCell.classList.remove("text-success");
      statusCell.classList.add("text-warning");


      row.classList.remove("table-active");
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const filterSelect = document.querySelector(".form-select");
  const rows = document.querySelectorAll(".clickable-row");

  filterSelect.addEventListener("change", function () {
    const filterValue = this.value.toLowerCase(); // Get selected filter

    rows.forEach(row => {
      const status = row.querySelector(".status").textContent.toLowerCase();
      const role = row.children[5].textContent.toLowerCase(); // 6th column is the role

      if (filterValue === "" || status === filterValue || role === filterValue) {
        row.style.display = ""; // Show row
      } else {
        row.style.display = "none"; // Hide row
      }
    });
  });
});