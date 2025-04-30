# STOX - Modern E-Commerce Website

A sophisticated, user-friendly, and visually appealing e-commerce platform for STOX wear.

## 🚀 Features

- **Modern Design**: Clean, elegant UI with a focus on user experience
- **Responsive**: Mobile-first approach ensuring perfect display on all devices
- **Performance Optimized**: Fast loading times with Next.js optimizations
- **Accessibility**: WCAG compliant design ensuring access for all users
- **SEO Friendly**: Built with best practices for search engine visibility

## 🔧 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework with server-side rendering
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Design System**: Custom components with Class Variance Authority (CVA)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)
- **State Management**: React Hooks for local state
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon set

## 📋 Pages Implemented

- Homepage with hero section, featured categories, and products
- Product listing page with filtering and sorting
- Product detail page with image gallery and selection options
- Shopping cart with quantity adjustments
- Multi-step checkout process
- About page
- Contact page

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/stox.git
cd stox
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Project Structure

```
/public              # Static assets (images, etc.)
/src
  /app               # Next.js app directory with routes
  /components        # Reusable UI components
    /layout          # Layout components (header, footer, etc.)
    /product         # Product-related components
    /ui              # Basic UI components (button, card, etc.)
  /lib               # Utility functions and helpers
  /types             # TypeScript type definitions
```

## 📝 To Do

- Implement authentication flow
- Add Sanity/Contentful CMS integration
- Set up real payment processing
- Add wishlist functionality
- Implement product reviews and ratings
- Set up admin dashboard

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📜 License

This project is licensed under the MIT License.

## 📧 Contact

For any questions or feedback, please reach out to [contact@stoxwear.nl](mailto:contact@stoxwear.nl)
