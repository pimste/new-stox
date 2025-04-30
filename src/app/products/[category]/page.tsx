"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Filter, ChevronDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";

const sampleProducts = [
  {
    id: "1",
    name: "Oversized Cotton T-Shirt",
    category: "Women",
    price: 29.99,
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"],
    colors: ["#000000", "#FFFFFF", "#a9a9a9"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isFeatured: true,
    isNew: true,
  },
  {
    id: "2",
    name: "Slim Fit Wool Blazer",
    category: "Men",
    price: 149.99,
    images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop"],
    colors: ["#000000", "#2F4F4F"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isFeatured: true,
  },
  {
    id: "3",
    name: "High Waist Straight Jeans",
    category: "Women",
    price: 89.99,
    images: ["https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?q=80&w=1954&auto=format&fit=crop"],
    colors: ["#4169E1", "#191970"],
    sizes: ["XS", "S", "M", "L"],
    isFeatured: true,
    isSale: true,
    discount: 20,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: 129.99,
    images: ["https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1974&auto=format&fit=crop"],
    colors: ["#8B4513", "#000000"],
    sizes: ["One Size"],
    isFeatured: true,
  },
  {
    id: "5",
    name: "Cashmere Sweater",
    category: "Women",
    price: 119.99,
    images: ["https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1974&auto=format&fit=crop"],
    colors: ["#DEB887", "#F5F5DC", "#708090"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "6",
    name: "Slim Fit Chino Pants",
    category: "Men",
    price: 69.99,
    images: ["https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop"],
    colors: ["#000000", "#A52A2A", "#556B2F"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "7",
    name: "Satin Blouse",
    category: "Women",
    price: 59.99,
    images: ["https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop"],
    colors: ["#FFB6C1", "#E6E6FA", "#FFFFFF"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "8",
    name: "Leather Watch",
    category: "Accessories",
    price: 199.99,
    images: ["https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1974&auto=format&fit=crop"],
    colors: ["#8B4513", "#000000"],
    sizes: ["One Size"],
    isSale: true,
    discount: 15,
  },
];

const filters = {
  price: [
    { id: "price-all", name: "All Prices", value: "all" },
    { id: "price-under-50", name: "Under €50", value: "0-50" },
    { id: "price-50-100", name: "€50 - €100", value: "50-100" },
    { id: "price-100-200", name: "€100 - €200", value: "100-200" },
    { id: "price-over-200", name: "Over €200", value: "200+" },
  ],
  size: [
    { id: "size-xs", name: "XS", value: "XS" },
    { id: "size-s", name: "S", value: "S" },
    { id: "size-m", name: "M", value: "M" },
    { id: "size-l", name: "L", value: "L" },
    { id: "size-xl", name: "XL", value: "XL" },
    { id: "size-xxl", name: "XXL", value: "XXL" },
    { id: "size-one-size", name: "One Size", value: "One Size" },
  ],
  color: [
    { id: "color-black", name: "Black", value: "#000000" },
    { id: "color-white", name: "White", value: "#FFFFFF" },
    { id: "color-blue", name: "Blue", value: "#4169E1" },
    { id: "color-brown", name: "Brown", value: "#8B4513" },
    { id: "color-green", name: "Green", value: "#556B2F" },
    { id: "color-gray", name: "Gray", value: "#a9a9a9" },
  ],
  sale: [
    { id: "sale-all", name: "All Products", value: "all" },
    { id: "sale-only", name: "Sale Only", value: "sale" },
    { id: "new-only", name: "New Arrivals", value: "new" },
  ],
};

export default function ProductsPage({
  params,
}: {
  params: { category: string };
}) {
  const searchParams = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    price: ["all"],
    size: [],
    color: [],
    sale: ["all"],
  });
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [sortOption, setSortOption] = useState("featured");
  const [categoryString, setCategoryString] = useState('');

  useEffect(() => {
    // Extract category from params safely on the client side
    if (params && params.category) {
      setCategoryString(params.category);
    }
  }, [params]);

  // Get category title from the category string
  const categoryTitle = categoryString
    ? categoryString
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : '';

  // Apply filters whenever they change
  useEffect(() => {
    let result = sampleProducts;

    // Filter by category (if not "all")
    if (categoryString && categoryString !== "all") {
      const normalizedCategory = categoryString
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      result = result.filter((product) => {
        if (categoryString === "new-arrivals" && product.isNew) return true;
        if (categoryString === "sale" && product.isSale) return true;
        return product.category.toLowerCase() === normalizedCategory.toLowerCase();
      });
    }

    // Filter by price
    if (activeFilters.price.length && !activeFilters.price.includes("all")) {
      result = result.filter((product) => {
        return activeFilters.price.some((range) => {
          if (range === "0-50") return product.price < 50;
          if (range === "50-100") return product.price >= 50 && product.price < 100;
          if (range === "100-200")
            return product.price >= 100 && product.price < 200;
          if (range === "200+") return product.price >= 200;
          return true;
        });
      });
    }

    // Filter by size
    if (activeFilters.size.length) {
      result = result.filter((product) => {
        return product.sizes?.some((size) =>
          activeFilters.size.includes(size)
        );
      });
    }

    // Filter by color
    if (activeFilters.color.length) {
      result = result.filter((product) => {
        return product.colors?.some((color) =>
          activeFilters.color.includes(color)
        );
      });
    }

    // Filter by sale/new
    if (activeFilters.sale.length && !activeFilters.sale.includes("all")) {
      result = result.filter((product) => {
        return activeFilters.sale.some((filter) => {
          if (filter === "sale") return product.isSale;
          if (filter === "new") return product.isNew;
          return true;
        });
      });
    }

    // Apply sorting
    result = [...result].sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "newest") return a.id > b.id ? -1 : 1;
      // Default to featured
      return a.isFeatured ? -1 : 1;
    });

    setFilteredProducts(result);
  }, [activeFilters, categoryString, sortOption]);

  const toggleFilter = (type: string, value: string) => {
    setActiveFilters((prev) => {
      const current = [...(prev[type] || [])];
      
      // Special handling for radio-button-like filters
      if (type === "price" || type === "sale") {
        return { ...prev, [type]: [value] };
      }
      
      // Toggle for checkboxes
      const existingIndex = current.indexOf(value);
      if (existingIndex >= 0) {
        current.splice(existingIndex, 1);
      } else {
        current.push(value);
      }
      
      return { ...prev, [type]: current };
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      price: ["all"],
      size: [],
      color: [],
      sale: ["all"],
    });
  };

  const activeFilterCount = 
    (activeFilters.price.includes("all") ? 0 : activeFilters.price.length) +
    activeFilters.size.length +
    activeFilters.color.length +
    (activeFilters.sale.includes("all") ? 0 : activeFilters.sale.length);

  return (
    <div className="container py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        /{" "}
        <span className="text-foreground">{categoryTitle}</span>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-3xl">{categoryTitle}</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                {activeFilterCount}
              </span>
            )}
          </Button>

          <div className="relative">
            <select
              className="h-9 w-full appearance-none rounded-md border border-input bg-background px-3 py-1 pr-8 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Filters Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-full transform space-y-6 overflow-auto bg-background p-6 shadow-lg transition-transform md:static md:z-0 md:block md:w-auto md:transform-none md:p-0 md:shadow-none ${
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between md:hidden">
            <h2 className="text-lg font-medium">Filters</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setFiltersOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-6">
            {/* Price Filter */}
            <div>
              <h3 className="mb-2 text-sm font-medium">Price</h3>
              <div className="space-y-2">
                {filters.price.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="radio"
                      name="price-filter"
                      checked={activeFilters.price.includes(option.value)}
                      onChange={() => toggleFilter("price", option.value)}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    {option.name}
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="mb-2 text-sm font-medium">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {filters.size.map((option) => (
                  <label
                    key={option.id}
                    className={cn(
                      "flex h-9 cursor-pointer items-center justify-center rounded-md border text-sm transition-colors",
                      activeFilters.size.includes(option.value)
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-input hover:bg-muted"
                    )}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={activeFilters.size.includes(option.value)}
                      onChange={() => toggleFilter("size", option.value)}
                    />
                    {option.name}
                  </label>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="mb-2 text-sm font-medium">Color</h3>
              <div className="flex flex-wrap gap-2">
                {filters.color.map((option) => (
                  <label
                    key={option.id}
                    className="cursor-pointer"
                    title={option.name}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={activeFilters.color.includes(option.value)}
                      onChange={() => toggleFilter("color", option.value)}
                    />
                    <div
                      className={cn(
                        "h-8 w-8 rounded-full border",
                        activeFilters.color.includes(option.value)
                          ? "ring-2 ring-primary ring-offset-2"
                          : "ring-1 ring-input hover:ring-muted-foreground"
                      )}
                      style={{ backgroundColor: option.value }}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Product Status Filter */}
            <div>
              <h3 className="mb-2 text-sm font-medium">Product Status</h3>
              <div className="space-y-2">
                {filters.sale.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="radio"
                      name="sale-filter"
                      checked={activeFilters.sale.includes(option.value)}
                      onChange={() => toggleFilter("sale", option.value)}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    {option.name}
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {activeFilterCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={clearFilters}
              >
                Clear All Filters
              </Button>
            )}
          </div>

          <div className="py-4 text-right md:hidden">
            <Button onClick={() => setFiltersOpen(false)}>Apply Filters</Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-dashed p-12 text-center">
              <h3 className="mb-2 text-lg font-medium">No products found</h3>
              <p className="text-muted-foreground">
                Try changing your filters or check back later for new items.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={clearFilters}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 