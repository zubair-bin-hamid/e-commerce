"use client";
import CategorySection from "@/components/CategorySection";
import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import NewCollection from "@/components/NewCollection";
import ShoppingSection from "@/components/ShoppingSection";
import Testimonials from "@/components/Testimonials";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure axios is installed and properly imported

export type ErrorType = {
  message: string;
};

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  const [newProducts, setNewProducts] = useState([]);
  const [loadingNew, setLoadingNew] = useState(true);
  const [errorNew, setErrorNew] = useState<ErrorType | null>(null);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/product/recommended"
        );
        setProducts(response.data); // Set the data to state
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError(err as ErrorType); // Set error if there's an issue
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    const fetchNewProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/product/new_arrivals"
        );
        setNewProducts(response.data); // Set the data to state
        setLoadingNew(false); // Set loading to false once data is fetched
      } catch (err) {
        setErrorNew(err as ErrorType); // Set error if there's an issue
        setLoadingNew(false); // Set loading to false even if there's an error
      }
    };

    fetchNewProducts();

    fetchRecommendedProducts(); // Call the fetch function
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center scroll-smooth">
      <Hero />
      <CategorySection />
      {loading ? (
        <p className="w-full h-[370px] flex justify-center items-center">
          Loading...
        </p>
      ) : error ? (
        <p className="w-full h-[370px] flex justify-center items-center">
          Error: {error.message}
        </p>
      ) : (
        <ShoppingSection heading="Selected Just for You" products={products} />
      )}
      <ChooseUs />
      {loadingNew ? (
        <p className="w-full h-[370px] flex justify-center items-center">
          Loading...
        </p>
      ) : errorNew ? (
        <p className="w-full h-[370px] flex justify-center items-center">
          Error: {errorNew.message}
        </p>
      ) : (
        <ShoppingSection heading="new arrivals" products={newProducts} />
      )}
      <NewCollection />
      <Testimonials />
    </div>
  );
}
