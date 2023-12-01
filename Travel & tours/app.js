var continents = {
  asia: {
    pakistan: {
      title: "karachi & lahore",
      days: "10 Days 9 Nights",
      Location: "Museum - Badshahi Mosque - Lahore Fort",
      price: "88000 PKR",
      img: "img/karachi-offer.jpeg",
    },
    bali: {
      title: "Bali & Singapore",
      days: "10 Days 8 Nights",
      Location: "Ubud - Nusa dua - Singapore",
      price: "170000 PKR",
      img: "img/bali-offer.jpeg",
    },
    bangkok: {
      title: "Bangkok Explorer",
      days: "12 Days 10 Nights",
      Location: "Bangkok - Chiang mai - Phuket - Chiang rai",
      price: "270000 PKR",
      img: "img/bangkok-offer.jpeg",
    },
  },
  middleEast: {
    turkey: {
      title: "Turkey Adventure",
      days: "10 Days 8 Nights",
      Location: "Istanbul - Cappadocia - Antalya",
      price: "250000 PKR",
      img: "img/turkey-offer.jpeg",
    },
    saudiArabia: {
      title: "Mecca and Madina ",
      days: "14 Days 13 Nights",
      Location: "Mecca - Madina",
      price: "150000 PKR",
      img: "img/saudia-offer.jpeg",
    },
    dubai: {
      title: "Incredible Dubai ",
      days: "11 Days 10 Nights",
      Location: "Burj Khalifa - Dubai Mall - Palm Jumeirah",
      price: "150000 PKR",
      img: "img/dubai.jpeg",
    },
  },
  europe: {
    london: {
      title: "London & Paris Express",
      days: "8 Days 6 Nights",
      Location: "London - Paris",
      price: "290000 PKR",
      img: "img/london-offer.jpeg",
    },
    spain: {
      title: "Classic Spain & Portugal",
      days: "12 Days 10 Nights",
      Location: "Madrid - Fatima - Lisbon - Seville - Barcelona",
      price: "220000 PKR",
      img: "img/spain-offer.jpeg",
    },
    germany: {
      title: "Discover Germany",
      days: "10 Days 8 Nights",
      Location: "Berlin - Munich - Frankfurt - Cologne",
      price: "240000 PKR",
      img: "img/germany-offer.jpeg",
    },
  },
  africa: {
    southAfrica: {
      title: "South Africa Adventure",
      days: "14 Days 12 Nights",
      Location: "Cape town  - Johannesburg - Victoria falls",
      price: "330000 PKR",
      img: "img/southafrica-offer.jpeg",
    },
    egypt: {
      title: "Egypt Adventure ",
      days: "10 Days 8 Nights",
      Location: "Cairo - Nile cruise",
      price: "360000 PKR",
      img: "img/egypt-offer.jpg",
    },
  },
 
  southAmerica: {
    saudiArabia: {
      title: "Peru Explorer",
      days: "8 Days 7 Nights",
      Location: "Machu - picchu - Cusco - Lima",
      price: "150000 PKR",
      img: "img/peru-offer.jpeg",
    },
  },
};

    /// OBJECT END

var region = document.getElementById("region");
var country = document.getElementById("country");
var main = document.getElementById("main");

region.innerHTML = `<option>Select Region</option>`;
country.innerHTML = `<option>Select Country</option>`;
date.innerHTML = `<option>Select Date</option>`;

for (var key in continents) {
  console.log(continents);
  region.innerHTML += `    <option value="${key}">${key.toUpperCase()}</option>  `;
}

function selectRegion() {
  country.innerHTML = "";
  country.innerHTML = `<option value="" >Select Country</option>`;

  for (var key in continents[region.value]) {
    country.innerHTML += `<option value="${key}">${key.toUpperCase()}</option>`;
  }
}

/// Filter Serach

function searchFilter() {
  var filterSearch = continents[region.value][country.value];
  console.log(continents);
  main.innerHTML = `
    <div class="col-md-8 mx-auto">
      <div class="card">
        <img src="${filterSearch.img}" class="card-img-top my-img" alt="...">
        <div class="card-body my-card">
          <h5 class="card-title card-offer-title">${filterSearch.title}</h5>
          <p class="card-title card-offer-title2">${filterSearch.days}</p>
          <p class="card-text card-offer-text">${filterSearch.Location}</p>
          <h6 class="card-text card-offer-text2">${filterSearch.price}</h6>
        </div>
      </div>
    </div>`;
}

// clear filter

function clearFilter() {
    region.innerHTML = `<option>Select Region</option>`;
  country.innerHTML = `<option>Select Country</option>`;
  var dateInput = document.getElementById('date');
  dateInput.value = "";
  main.innerHTML = "";

  for (var key in continents) {
    console.log(continents);
    region.innerHTML += `    <option value="${key}">${key.toUpperCase()}</option>  `;
  }

  for (var continent in continents) {
    for (var countryName in continents[continent]) {
      main.innerHTML += `
        <div class="col-md-4">
          <div class="card">
            <img src="${continents[continent][countryName].img}" class="card-img-top my-img" alt="...">
            <div class="card-body my-card">
              <h5 class="card-title card-offer-title">${continents[continent][countryName].title}</h5>
              <p class="card-title card-offer-title2">${continents[continent][countryName].days}</p>
              <p class="card-text card-offer-text">${continents[continent][countryName].Location}</p>
              <h6 class="card-text card-offer-text2">${continents[continent][countryName].price}</h6>
            </div>
          </div>
        </div>
      `;
    }
  }
}

/// cards

for (var continent in continents) {
  for (var countryName in continents[continent]) {
    main.innerHTML += `
      <div class="col-md-4">
        <div class="card">
          <img src="${continents[continent][countryName].img}" class="card-img-top my-img" alt="...">
          <div class="card-body my-card">
            <h5 class="card-title card-offer-title">${continents[continent][countryName].title}</h5>
            <p class="card-title card-offer-title2">${continents[continent][countryName].days}</p>
            <p class="card-text card-offer-text">${continents[continent][countryName].Location}</p>
            <h6 class="card-text card-offer-text2">${continents[continent][countryName].price}</h6>
          </div>
        </div>
      </div>
    `;
  }
}
