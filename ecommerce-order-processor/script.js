const orders = [
  {
    orderId: "ORD-1001",
    customerName: "Lerato   Mokoena",
    email: "leratomokoena@gmail.com",
    product: "Wireless Headphones",
    category: "Electronics",
    price: 1299,
    orderDate: "2026-10-02",
    quantity: 1,
    status: "Delivered",
    paymentMethod: "Card",
    city: "Johannesburg",
    rating: 5
  },
  {
    orderId: "ORD-1002",
    customerName: "James Carter",
    email: "james.c@outlook.com",
    product: "Running Shoes",
    category: "Sportswear",
    price: 899.5,
    orderDate: "2026-09-05",
    quantity: 2,
    status: "Delivered",
    paymentMethod: "PayPal",
    city: "Cape Town",
    rating: 4
  },
  {
    orderId: "ORD-1003",
    customerName: "Aisha Patel",
    email: "aisha24@gmail.com",
    product: "Coffee Maker",
    category: "Home & Kitchen",
    price: 749.0,
    orderDate: "2026-11-08",
    quantity: 1,
    status: "Shipped",
    paymentMethod: "EFT",
    city: "Durban",
    rating: null
  },
  {
    orderId: "ORD-1004",
    customerName: "Sipho Ndlovu  ",
    email: "siphondlovu89@gmail.com",
    product: "Smartphone",
    category: "Electronics ",
    price: 8999,
    orderDate: "2026-01-12",
    quantity: 1,
    status: "Delivered",
    paymentMethod: "Card",
    city: "Pretoria",
    rating: 5
  },
  {
    orderId: "ORD-1005",
    customerName: " Emily Johnson",
    email: "emily.johnson@gmail.com",
    product: "Yoga Mat",
    category: "  Sportswear",
    price: 349,
    orderDate: "2026-09-15",
    quantity: 3,
    status: "Processing",
    paymentMethod: "Card",
    city: "Port Elizabeth",
    rating: null
  },
  {
    orderId: "ORD-1006",
    customerName: "Thandiwe Dlamini",
    email: "thandiwe.dlamini@outlook.com",
    product: "Novel: The Silent River",
    category: "Books",
    price: 259,
    orderDate: "2026-05-18",
    quantity: 2,
    status: "Delivered",
    paymentMethod: "EFT",
    city: "Bloemfontein",
    rating: 4
  },
  {
    orderId: "ORD-1007",
    customerName: "Michael Brown",
    email: "michael.brown@outlook.com",
    product: "Air Fryer",
    category: "Home & Kitchen",
    price: 1599,
    orderDate: "2026-09-21",
    quantity: 1,
    status: "Cancelled",
    paymentMethod: "PayPal",
    city: "Johannesburg",
    rating: null
  },
  {
    orderId: "ORD-1008",
    customerName: "Naledi Khumalo",
    email: "naledikhumalo.co",
    product: "Laptop Backpack",
    category: "Accessories",
    price: 599.99,
    orderDate: "2026-09-25",
    quantity: 1,
    status: "Shipped",
    paymentMethod: "Card",
    city: "Cape Town",
    rating: 3
  },
  {
    orderId: "ORD-1009",
    customerName: "David Smith",
    email: "davids56@gmail.com",
    product: "Bluetooth Speaker",
    category: "Electronics",
    price: 999,
    orderDate: "2026-09-29",
    quantity: 2,
    status: "Pending",
    paymentMethod: "EFT",
    city: "Durban",
    rating: null
  },
  {
    orderId: "ORD-1010",
    customerName: "Zanele Mahlangu",
    email: "zanele.mahlangu@gmail.com",
    product: "Leather Wallet",
    category: "Accessories",
    price: 450,
    orderDate: "2026-10-03",
    quantity: 1,
    status: "Delivered",
    paymentMethod: "Card",
    city: "Polokwane",
    rating: 5
  },
  {
    orderId: "ORD-1011",
    customerName: "Olivia Williams",
    email: "oliviawilliams@gmail.com",
    product: "Cookbook: Easy Weeknight Meals",
    category: "Books",
    price: 320,
    orderDate: "2026-10-07",
    quantity: 1,
    status: "Processing",
    paymentMethod: "PayPal",
    city: "Pretoria",
    rating: null
  },
  {
    orderId: "ORD-1012",
    customerName: "Kagiso Molefe",
    email: "kagisomolefe@gmail.com",
    product: "Smartwatch",
    category: "Electronics",
    price: 3499.09,
    orderDate: "2026-10-11",
    quantity: 1,
    status: "Shipped",
    paymentMethod: "Card",
    city: "Johannesburg",
    rating: 4
  }
];


const currency = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR"
});


function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

// Tailwind colours
const statusStyles = {
  Pending: "bg-amber-100 text-amber-800",
  Processing: "bg-sky-100 text-sky-800",
  Shipped: "bg-indigo-100 text-indigo-800",
  Delivered: "bg-emerald-100 text-emerald-800",
  Cancelled: "bg-rose-100 text-rose-800"
};

//The order function
function createOrderRow(order) {
  const total = order.price * order.quantity;
  const badge = statusStyles[order.status] || "bg-slate-100 text-slate-700";

  return `
    <tr class="hover:bg-slate-50">
      <td class="px-3 py-3 font-mono text-xs text-slate-600 whitespace-nowrap">${order.orderId}</td>
      <td class="px-3 py-3">
        <div class="font-medium text-slate-800">${order.customerName}</div>
        <div class="text-xs text-slate-500">${order.email}</div>
      </td>
      <td class="px-3 py-3">
        <div class="text-slate-800">${order.product}</div>
        <div class="text-xs text-slate-500">${order.category}</div>
      </td>
      <td class="px-3 py-3 text-right whitespace-nowrap">${currency.format(order.price)}</td>
      <td class="px-3 py-3 text-center">${order.quantity}</td>
      <td class="px-3 py-3 text-right font-semibold whitespace-nowrap">${currency.format(total)}</td>
      <td class="px-3 py-3 whitespace-nowrap text-slate-600">${formatDate(order.orderDate)}</td>
      <td class="px-3 py-3">
        <span class="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${badge}">${order.status}</span>
      </td>
    </tr>`;
}


function renderOrders(orderList) {
  const container = document.getElementById("orders-content");
  const count = document.getElementById("orders-count");

  count.textContent = `${orderList.length} order${orderList.length === 1 ? "" : "s"}`;

  if (orderList.length === 0) {
    container.innerHTML = `<p class="text-slate-400 py-6 text-center">No orders found.</p>`;
    return;
  }

  const rows = orderList.map(createOrderRow).join("");

  container.innerHTML = `
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-slate-200">
        <thead class="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
          <tr>
            <th class="px-3 py-2">Order ID</th>
            <th class="px-3 py-2">Customer</th>
            <th class="px-3 py-2">Product</th>
            <th class="px-3 py-2 text-right">Price</th>
            <th class="px-3 py-2 text-center">Qty</th>
            <th class="px-3 py-2 text-right">Total</th>
            <th class="px-3 py-2">Date</th>
            <th class="px-3 py-2">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          ${rows}
        </tbody>
      </table>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderOrders(orders);
});

//CHALLENGE 1

function cleanName(name) {
  const words = name.trim().split(" ").filter(word => word !== ""); // remove extra spaces
  const fixedWords = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  return fixedWords.join(" ");
}


function cleanEmail(email) {
  return email.replaceAll(" ", "").toLowerCase();
}


function getFirstName(name) {
  return name.split(" ")[0];
}


function getDomain(email) {
  if (!email.includes("@")) {
    return "none";
  }
  return email.slice(email.indexOf("@") + 1);
}

//CHALLENGE 2

function formatPrice(amount) {
  return "R " + amount.toFixed(2);
}


function roundMoney(amount) {
  return Math.round(amount * 100) / 100;
}

//CHALLENGE 3 (RESEARCH)
function toDate(text) {
  return new Date(text + "T00:00:00");
}


function formatDate(date) {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}


function formatShortDate(date) {
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

function getDaysAgo(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);}

  //CHALLENGE 4

  function getFilteredOrders() {
  const searchText = searchBox.value.trim().toLowerCase();
  const category = categorySelect.value;
  const minPrice = parseFloat(minPriceBox.value);
  const maxPrice = parseFloat(maxPriceBox.value);

  let results = cleanOrders.filter(order =>
    order.customerName.toLowerCase().includes(searchText) ||
    order.orderId.toLowerCase().includes(searchText) ||
    order.product.toLowerCase().includes(searchText)
  );

  if (category !== "All") {
    results = results.filter(order => order.category === category);
  }
  if (!isNaN(minPrice)) {
    results = results.filter(order => order.price >= minPrice);
  }
  if (!isNaN(maxPrice)) {
    results = results.filter(order => order.price <= maxPrice);
  }
  if (recentOnlyBox.checked) {
    results = results.filter(order => order.isRecent);
  }

  return sortByDate(results, sortSelect.value);
}

function applyFilters() {
  const results = getFilteredOrders();
  showOrders(results);

  const resultsTotal = results.reduce((sum, order) => sum + order.total, 0);
  document.getElementById("filter-result").textContent =
    "Showing " + results.length + " of " + cleanOrders.length + " orders. Total: " + formatPrice(resultsTotal);
}

function clearFilters() {
  searchBox.value = "";
  categorySelect.value = "All";
  minPriceBox.value = "";
  maxPriceBox.value = "";
  sortSelect.value = "newest";
  recentOnlyBox.checked = false;
  applyFilters();
}

function findOrder() {
  const text = findBox.value.trim().toLowerCase();
  const result = document.getElementById("find-result");

  const order = cleanOrders.find(order =>
    order.orderId.toLowerCase() === text || order.customerName.toLowerCase() === text
  );}

  function showVatList() {
  const vatList = cleanOrders.map(order =>
    order.product + ": " + formatPrice(order.total) + " → " + formatPrice(order.totalWithVat) + " incl. VAT"
  );

  document.getElementById("vat-list").innerHTML = vatList.map(line => "<li>" + safe(line) + "</li>").join("");
}

//CHALLENGE 5

function getCategories() {
  const allCategories = cleanOrders.map(order => order.category);
  return new Set(allCategories); 
}

function showCategories() {
  const categories = getCategories();
  const previousChoice = categorySelect.value;
  const categoryList = document.getElementById("category-list");

  categoryList.innerHTML = "";
  categorySelect.innerHTML = '<option value="All">All categories</option>';

  for (const category of categories) {
   
    const button = document.createElement("button");
    button.textContent = category;
    button.className = "bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-3 py-1 text-sm hover:bg-indigo-100";
    button.addEventListener("click", () => filterByCategory(category));
    categoryList.appendChild(button);

   
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  }

  
  categorySelect.value = categories.has(previousChoice) ? previousChoice : "All";
}
function filterByCategory(category) {
  categorySelect.value = category;
  applyFilters();
  document.getElementById("orders").scrollIntoView();
}


//CHALLENGE 6

let productMap = new Map();

function buildProductMap() {
  productMap = new Map();
  for (const order of cleanOrders) {
    
    productMap.set(order.product.toLowerCase(), {
      name: order.product,
      category: order.category,
      price: order.price
    });
  }

  let suggestions = "";
  for (const product of productMap.values()) {
    suggestions += `<option value="${safe(product.name)}"></option>`;
  }
  document.getElementById("product-names").innerHTML = suggestions;
}

function lookUpProduct() {
  const name = productBox.value.trim().toLowerCase();
  const result = document.getElementById("product-result");

  if (name === "") {
    result.innerHTML = `<span class="text-slate-500">There are ${productMap.size} products. Start typing a name.</span>`;
  } else if (productMap.has(name)) {
    const product = productMap.get(name);
    result.innerHTML = `
      <p><b>${safe(product.name)}</b></p>
      <p>Category: ${safe(product.category)}</p>
      <p>Price: ${formatPrice(product.price)}</p>`;
  } else {
    result.innerHTML = `<span class="text-red-600">"${safe(productBox.value)}" is not a product in this store.</span>`;
  }
}

//CHALLENGE 8
function validateValue() {
  const value = validateBox.value.trim();
  const result = document.getElementById("validate-result");
  const pattern = validateType.value === "email" ? EMAIL_PATTERN : ORDER_ID_PATTERN;

  if (value === "") {
    result.textContent = "";
  } else if (pattern.test(value)) {
    result.innerHTML = '<span class="text-green-700">✓ Valid</span>';
  } else {
    result.innerHTML = '<span class="text-red-600">✗ Not valid</span>';
  }
}


function showCleaningTable() {
  let rows = "";
  for (const order of cleanOrders) {
    rows += `
      <tr class="border-b">
        <td class="p-2 font-mono text-xs whitespace-pre">"${safe(order.originalName)}"</td>
        <td class="p-2">${safe(order.customerName)}</td>
        <td class="p-2">${safe(order.firstName)}</td>
        <td class="p-2 font-mono text-xs whitespace-pre">"${safe(order.originalEmail)}"</td>
        <td class="p-2">${safe(order.email)}</td>
        <td class="p-2">${safe(order.domain)}</td>
      </tr>`;
  }
  document.getElementById("cleaning-table").innerHTML = rows;
}