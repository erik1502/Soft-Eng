document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".notification-item");

  rows.forEach(row => {
    row.addEventListener("click", function () {
      // Toggle the "notification-active" class on click
      this.classList.toggle("notification-active");
    });
  });
});



document.getElementById("markAsRead").addEventListener("click", function () {
  document.querySelectorAll(".notification-container .text-container.notification-unread").forEach(function (element) {
    element.classList.remove("notification-unread");
  });
});