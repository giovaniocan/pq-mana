# Maná Pão de Queijo

**English** · [Português](README.pt-BR.md)

> Ordering website for Maná, a pão de queijo (Brazilian cheese bread) maker in Moreira Sales, Paraná: customers pick products, build a cart and send the order, which arrives by email and is paid on delivery.

![Home page with the hero banner, four selling points and the start of the product list](docs/screenshots/home.png)

## About

The site takes orders without a backend or online payment. The catalog lives in the code, the cart lives in the browser, and checkout emails the order to the business through [EmailJS](https://www.emailjs.com/). The team then contacts the customer to confirm, and the customer pays on delivery. The interface is in Portuguese.

It is a Next.js (Pages Router) app with Redux Toolkit for the cart, React Hook Form with Zod for the checkout form, and Jest with React Testing Library for tests.

## Features

- **Product catalog**: seven products (1 kg tubs, 4 kg buckets, frozen pão de queijo in three sizes and two kinds of chipa), each with a photo, size tags, a description and a quantity picker.
- **Shopping cart**: adding a product that is already in the cart adds to its quantity. You can change quantities or remove items at checkout, and the header badge shows how many different products are in the cart.
- **Cart survives reloads**: the cart is persisted to `localStorage` with `redux-persist`.
- **Validated checkout form**: company or owner name, phone, address, city, CEP (Brazilian postal code, 8 digits) and number, all checked with a Zod schema before the order goes out.
- **Payment on delivery**: the customer chooses credit card, PIX or cash. Nothing is charged online.
- **Order by email**: on submit, the order goes out through EmailJS with the customer's details, every item with its quantity, and the total.
- **Confirmation page**: shows the delivery name, city and payment method, and tells the customer the team will get in touch to confirm.
- **Feedback and empty states**: toast messages for added items and errors, and an empty-cart screen with a way back to the products.

## Screenshots

| Product list | Checkout |
| --- | --- |
| ![Grid of product cards with photo, size tag, price and quantity buttons](docs/screenshots/products.png) | ![Checkout with the delivery address form, payment options and two products in the cart](docs/screenshots/checkout.png) |

![Order confirmation showing delivery to Padaria Exemplo in Moreira Sales, PR, paid with PIX on delivery](docs/screenshots/success.png)

All product prices are currently set to `0` in `src/utils/CardsContent.ts`, so the screens show R$ 0.00. The order in the confirmation screenshot uses made-up test data.

## Tech stack

- **Frontend:** Next.js 13 (Pages Router), React 18, TypeScript 5, Tailwind CSS 3
- **State:** Redux Toolkit, redux-persist
- **Forms:** React Hook Form, Zod
- **Other libraries:** EmailJS (order email), react-toastify (toasts), next-seo (meta tags), Phosphor icons
- **Testing:** Jest 29, React Testing Library
- **Linting:** ESLint with `@rocketseat/eslint-config`

## Getting started

### Prerequisites

- Node.js and npm (tested with Node.js 24)

### Installation

```bash
git clone https://github.com/giovaniocan/pq-mana.git
cd pq-mana
npm install
npm run dev
```

Open http://localhost:3000.

For a production build, run `npm run build` and then `npm run start`.

Orders are sent with EmailJS. To receive them yourself, create your own EmailJS service and template and set them in `src/hooks/SendEmailFunction.ts`.

The repo also has a `db.json` and an `npm run server` script that serve the products with `json-server` on port 3001. They were meant for a planned API; the code that would read from it is commented out in `src/pages/home/index.tsx`, so the pages don't use them.

## Running tests

```bash
npm test
```

43 tests in 12 suites, using Jest and React Testing Library. They cover the components, the cart reducer, and the home, checkout and confirmation pages.

## Project structure

```
src/
├── pages/         # routes: / (home), /checkout, /success
├── components/    # header, home (intro + product list), checkout, success
├── redux/         # store, persisted cart slice and selectors
├── lib/           # Zod schema for the checkout form
├── hooks/         # EmailJS sender and toast helper
├── utils/         # product catalog
└── pages-tests/   # page-level tests
public/            # logo, banner and product photos
```
