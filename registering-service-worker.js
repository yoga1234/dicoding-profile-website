// registering service worker
if("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(function() {
        console.log("Pendaftaran serviceWorker berhasil.");
      })
      .catch(function() {
        console.log("Pendaftaran serviceWorker gagal.");
      });
  });
} else {
  console.log("serviceWorker belum didukung browser ini.");
}