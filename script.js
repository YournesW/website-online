function navigate() {
  const url = document.getElementById("url-bar").value;
  const iframe = document.getElementById("web-viewer");
  if (url) {
    iframe.src = url.startsWith("http") ? url : "http://" + url;  // Ensure the URL starts with 'http'
  }
}
