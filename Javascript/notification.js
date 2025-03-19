


document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".notification-item");

  rows.forEach(row => {
    row.addEventListener("click", function () {
      // Toggle the "notification-active" class on click
      this.classList.toggle("notification-active");
    });
  });
});

function toggleActiveButton(activeButton) {
  // Remove bg-btn only from the "All" and "Unread" buttons
  document.querySelectorAll("#showAll, #showUnread").forEach(btn => btn.classList.remove("bg-btn"));

  // Add bg-btn to the clicked button
  activeButton.classList.add("bg-btn");
}

document.getElementById("markAsRead").addEventListener("click", function () {
  document.querySelectorAll(".notification-container .text-container.notification-unread").forEach(function (element) {
    element.classList.remove("notification-unread");
  });
});


document.getElementById("showUnread").addEventListener("click", function () {
  document.querySelectorAll(".notification-item").forEach(function (item) {
    const textContainer = item.querySelector(".text-container");
    if (textContainer.classList.contains("notification-unread")) {
      item.style.display = "flex"; // Show unread notifications
    } else {
      item.style.display = "none"; // Hide read notifications
    }
  });
  toggleActiveButton(this);
});


document.getElementById("showAll").addEventListener("click", function () {
  document.querySelectorAll(".notification-item").forEach(function (item) {
    item.style.display = "flex"; // Show all notifications
  });
  toggleActiveButton(this);
});