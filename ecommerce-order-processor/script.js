const orders = [
  {
    orderId: "ORD-1001",
    customerName: "LeRato   Mokoena",
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
    customerName: "James CartER",
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
    customerName: "AIshA Patel",
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