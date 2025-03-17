"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./index.module.scss";

// Import images
import profile from "@/app/assets/img/profile.jpg";

const images = [profile,];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={classes.hero}>
      <Image
        src={images[currentImageIndex]}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className={classes.heroImage}
      />
      <div className={classes.content}>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my journey in Arts and discover my creative projects.</p>
      </div>
    </section>
  );
};

export default Hero;


