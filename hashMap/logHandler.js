function log(string) {
  const logDiv = document.querySelector(".log");
  const logEntry = document.createElement("div");
  logEntry.classList.add("logentry");
  const d = Date.now();
  logEntry.textContent = `${d}: ${string}`;
  logDiv.append(logEntry);
}
