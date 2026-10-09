# Whatbytes - Frontend Assignment

A mini e-commerce product listing application built to showcase modern frontend development practices using Next.js, Tailwind CSS, and React Context.

## Live Demo
[https://your-app.vercel.app](https://ecommerce-omega-ten-91.vercel.app/)

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **State Management:** React Context API

## Features
- **Product Listing:** Responsive grid layout (3 columns desktop, 2 tablet, 1 mobile).
- **Filtering:** Category and price range filters synced with the URL.
- **Search:** Case-insensitive search by product title synced with the URL.
- **Product Details:** Dynamic routes for viewing individual product details (`/product/[id]`).
- **Shopping Cart:** Add/remove items, update quantities, and view order summary.
- **Persistence:** Cart state is persisted across reloads using `localStorage`.

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd whatbytes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## Folder Structure

```
.
├── app/
│   ├── cart/             # Cart page
│   ├── product/[id]/     # Product detail dynamic route
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # Root layout including Header, Footer, and CartProvider
│   └── page.tsx          # Home page (Product Listing)
├── components/           # Reusable UI components
│   ├── CartItem.tsx
│   ├── FilterSidebar.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── QuantitySelector.tsx
│   └── SearchBar.tsx
├── context/              # React Context for state management
│   └── CartContext.tsx
├── data/                 # Mock static data
│   └── products.ts
├── types/                # TypeScript type definitions
│   └── index.ts
└── public/               # Static assets
```
