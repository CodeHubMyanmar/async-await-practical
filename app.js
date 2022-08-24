// data fetch

let table = document.querySelector(".table");
let details = document.querySelector(".details");
async function dataFetch() {
  let response = await fetch("https://fakestoreapi.com/products/");
  let data = await response.json(); // array

  console.log(data);

  for (i = 0; i < data.length; i++) {
    table.innerHTML += `
    <tr onclick="singleDataFetch(${data[i].id})">
            <td>${data[i].id}</td>
            <td><img src="${data[i].image}" class="img-ctr" /></td>
            <td>${data[i].title}</td>
            <td>$ ${data[i].price}</td>
    </tr>`;
  }
}

dataFetch();

async function singleDataFetch(id) {
  let response = await fetch("https://fakestoreapi.com/products/" + id);
  let data = await response.json();

  details.innerHTML = `<h2 class="text-center">Details</h2>
            <img
              src="${data.image}"
              alt=""
              class="w-100"
            />
            <hr />
            <p><span class="text-primary fs-4 fw-bold">Title - </span> ${data.title}</p>
            <p><span class="text-primary fs-4 fw-bold">Description - </span>${data.description}</p>
            <p><span class="text-primary fs-4 fw-bold">Category - </span>${data.category}</p>
            <p><span class="text-primary fs-4 fw-bold">Price - </span>$ ${data.price}</p>
            <p><span class="text-primary fs-4 fw-bold">Rating - </span>${data.rating.rate}</p>
            <div class="btn btn-warning w-100">Want to buy</div>
            <div
              class="btn btn-outline-danger w-100 my-2"
              onclick="deleteDiv()"
            >
              DELETE
            </div>`;
}
