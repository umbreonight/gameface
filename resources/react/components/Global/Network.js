const statusStrip = document.querySelector(".network-status-strip");
const statusIcon = document.querySelector(".network-status-icon");

function showStatus(online) {
  if (online) {
    if (statusStrip) {
      statusStrip.style.backgroundColor = "#4CAF50";
    }

    if (statusIcon) {
      statusIcon.innerText = `wifi`;
      statusIcon.style.color = "#4CAF50";
    }
  } else {
    if (statusStrip) {
      statusIcon.style.color = "#F44336";
      statusStrip.style.backgroundColor = "#F44336";
    }

    if (statusIcon) {
      statusIcon.innerText = `wifi_off`;
    }
  }
}

window.addEventListener("load", () => {
  // 1st, we set the correct status when the page loads
  navigator.onLine ? showStatus(true) : showStatus(false);

  // now we listen for network status changes
  window.addEventListener("online", () => {
    showStatus(true);
  });

  window.addEventListener("offline", () => {
    showStatus(false);
  });
});
