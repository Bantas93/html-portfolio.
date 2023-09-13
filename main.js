const apiKey = config.apiKey;
const category = "success";
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=" + category;
// Fungsi untuk mengambil data dari API
function fetchData() {
  fetch(apiUrl, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayDataQuote(data); // Memanggil fungsi untuk menampilkan data
      displayDataAuthor(data); // Memanggil fungsi untuk menampilkan data
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
}

// Fungsi untuk menampilkan hasil dari API ke dalam elemen HTML dengan ID "apiData"
function displayDataQuote(data) {
  const apiDataElement = document.getElementById("quote");
  apiDataElement.innerHTML = ""; // Mengosongkan elemen sebelum menambahkan data baru

  data.forEach((quote) => {
    const listQuote = document.createElement("p");

    listQuote.textContent = `${quote.quote}`;
    apiDataElement.appendChild(listQuote);
  });
}

function displayDataAuthor(data) {
  const apiDataElement = document.getElementById("author");
  apiDataElement.innerHTML = "";
  data.forEach((quote) => {
    const listAuthor = document.createElement("p");
    listAuthor.textContent = `${quote.author}`;
    apiDataElement.appendChild(listAuthor);
  });
}
// Panggil fetchData saat halaman dimuat
setInterval(fetchData, 5000);
