const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const price = document.getElementById("price");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

// Update And Total Price
function updateSelectedcount() {
  const selectedSeat = document.querySelectorAll(".row .seat.selected");
  const selectedSeatcount = selectedSeat.length;

  count.innerHTML = selectedSeatcount;
  price.innerHTML = ticketPrice * selectedSeatcount;
}

// movie  Price Update

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  console.log(ticketPrice);
  updateSelectedcount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");
  }
  updateSelectedcount();
});
