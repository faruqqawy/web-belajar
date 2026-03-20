document.addEventListener("DOMContentLoaded", () => {
  alert("Aplikasi siap 🚀");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .then(() => console.log("Service Worker terdaftar"))
      .catch((err) => console.log("SW gagal:", err));
  }
});
const CURRENT_VERSION = "1.0.0"; // versi sekarang

async function checkUpdate() {
  try {
    const res = await fetch("https://namadomainkamu.com/version.json");
    const data = await res.json();

    if (data.version !== CURRENT_VERSION) {
      if (confirm("Ada update baru! Mau reload sekarang?")) {
        location.reload();
      }
    }
  } catch (err) {
    console.log("Cek update gagal:", err);
  }
}

// Cek update setiap 10 detik
setInterval(checkUpdate, 10000);
