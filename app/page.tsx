"use client"
import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import BodyComponent from "./components/BodyComponent";
import { ItemData, ScrollingCardData, ToggleCardData } from "./interfaces/general";
import '../public/styles/index.css';
import Footer from './components/Footer';


const App: React.FC = () => {
  // State to handle the fetched data
  const [itemData, setItemData] = useState<ItemData[] | null>(null);
  const [scrollingCardData, setScrollingCardData] = useState<ScrollingCardData[] | null>(null);
  const [toggleCardData, setToggleCardData] = useState<ToggleCardData[] | null>(null);
  
  // State to handle loading and errors
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch the data
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getData`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        // Set the data into state
        setItemData(data.itemData);
        setScrollingCardData(data.scrollingCardData);
        setToggleCardData(data.toggleCardData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  if (!itemData || !scrollingCardData || !toggleCardData) {
    return <div>No data available.</div>; 
  }

  // Render the main content once data has been successfully fetched
  return (
    <>
      <main className="grid w-full h-auto bg-gradient-to-b min-h-[200px]  from-[#26C2B9] to-[#288BE7]">
      <div className="p-4 lg:pl-[360px] flex items-start flex-col lg:pr-[100px]">
        <Navbar />
        <BodyComponent
          itemData={itemData}
          scrollingCardData={scrollingCardData}
          toggleCardData={toggleCardData}
        />
      </div>
    </main>
     <div className="p-4 lg:pl-[360px] flex items-start flex-col lg:pr-[100px]">

     <Footer />
     </div>
    </>
    
  );
};

export default App;
