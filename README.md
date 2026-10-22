# E-Commerce Order Processor

## Project Description

The E-Commerce Order Processor is a browser-based tool that a small online business could use to clean, analyse and report on its orders. It takes a deliberately messy set of orders and:

- cleans customer names and emails
- calculates totals, averages and VAT
- turns raw date strings into readable dates and marks recent orders
- lets the user search, filter, sort and find orders
- lists unique product categories
- looks up any product instantly by name
- exports the orders as JSON and imports new or edited orders from JSON
- validates emails and order IDs with regular expressions
- shows a statistics dashboard that updates whenever the data changes

Everything runs in the browser. There is no backend and no database.

## Technologies

- HTML
- Tailwind CSS (via the Play CDN; used for all styling, with no custom CSS)
- JavaScript (vanilla, no libraries)

## Project Structure

```
ecommerce-order-processor/
├── index.html          # Page layout with the six sections
├── script.js           # Order data and all application logic
├── assets/
│   └── screenshots/    # Screenshots used in this README
└── README.md
```

## How to Run

1. Clone the repository:
```bash
   git clone https://github.com/<Mpho09>/ecommerce-order-processor.git
   cd ecommerce-order-processor
```
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox or Safari).

No installation or build step is needed. An internet connection is required the first time so Tailwind CSS can load from its CDN. If you would rather use a local server:

```bash
npx serve .
```

### Things to try

- **Search / Filter:** type `smith`, choose a category, set a price range, or tick "Recent orders only".
- **Find a single order:** enter `ORD-1004` or `Sipho Ndlovu`.
- **Categories:** click a category chip to filter the orders.
- **Product Lookup:** type `Smartphone`, then type a product that doesn't exist.
- **Validation tool:** test `david.smith#example.com` as an email, or `ORD1011` as an order ID.
- **Import:** click **Load example** and then **Add to orders**. The new "Toys & Games" category appears in the categories, the dropdown and the statistics.
- **Edit and re-import:** copy the exported JSON, edit it, paste it into the import box and click **Replace all orders**.

## The Dataset

`script.js` contains 12 orders. Each has the required fields (`orderId`, `customerName`, `email`, `product`, `category`, `price`, `orderDate`) plus `quantity`, `status`, `paymentMethod`, `city` and `rating`.

Some of the data is deliberately messy so the app has something to clean and validate:

- Names with extra spaces and inconsistent capitalisation
- Emails with stray spaces and uppercase letters
- invalid emails 
- Prices with decimals
- Order dates spread 

Prices are treated as excluding VAT. VAT is calculated at 15%. "Recent" means placed within the last 30 days of today's date so the number of recent orders changes over time.

## Reflection

1. **Which built-in JavaScript object did you find most useful?**
I found the Map object most useful because it helps me store and find product information, such as product names, categories and prices. It makes searching for products easier.
  

2. **Which challenge was the most difficult?**
making sure all orders displayed correctly. I had to use different string methods to remove extra spaces, format names and convert emails to lowercase.
  

3. **What did you learn about choosing the right JavaScript method for a problem?**
I learned that different JavaScript methods have different purposes. For example trim() removes extra spaces, toLowerCase() changes text to lowercase, split() separates text, and map() helps process items. Choosing the right method makes code simpler and easier to understand.
  

4. **If you had more time, what would you improve about the application?**
I would improve the application by making the design more user-friendly, adding better product search options and displaying clearer error messages when a product cannot be found. I would also add more tests to make sure the application works correctly.
   
