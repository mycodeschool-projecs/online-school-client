"use client";
import React from "react";
import { motion } from "framer-motion";
import trainer from "@/assets/instructor2.jpg";
import background from "@/assets/backgroundCourses.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";


const StorySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="flex items-center justify-center md:py-4 mx-4"
    >
      <motion.div
        className="mt-8 md:mt-6 relative font-jakarta grid min-h-[80vh] grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-screen-lg mx-auto px-4 md:px-6 bg-secondary rounded-xl p-8 shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 z-0 rounded-xl"
          initial={{ filter: "blur(40px)", scale: 1.1 }}
          animate={{
            filter: inView ? "blur(0px)" : "blur(10px)",
            scale: inView ? 1 : 1.1,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-start justify-center px-4 md:px-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-extrabold mb-6 max-w-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
          >
            În călătoria către independență și autenticitate, fiecare pas contează!
          </motion.h1>
          <motion.p
            className="font-thin text-base md:text-xl mb-4 text-gray-800 max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          >
            Din 2012, când am deschis <span className="text-primary font-semibold">primul meu salon de beauty</span>, până la lansarea brandului <span className="text-primary font-semibold">Dynamic Duchess Lashes</span> în 2023, fiecare pas din această călătorie a fost o afirmare a pasiunii și a determinării mele.
          </motion.p>
          <motion.p
            className="font-thin text-base md:text-xl mb-4 text-gray-800 max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          >
            Cu peste <span className="text-primary font-semibold">200</span> de absolvenți la activ, lash styliști din întreaga lume, sunt mândră să conduc o echipă talentată de profesioniști și să împărtășesc această experiență cu femei care își doresc să-și descopere forța interioară.
          </motion.p>
          <motion.p
            className="font-thin text-base md:text-xl mb-4 text-gray-800 max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          >
            Fii stăpână propriului destin și explorează-ți potențialul nelimitat. Acest minicurs este creat special pentru femeile care caută să-și exprime individualitatea și să își îmbunătățească încrederea în sine. Ești gata să faci acest pas?
          </motion.p>
        
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center px-4 md:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={trainer}
            className="rounded-2xl md:w-48 md:h-64 max-w-[250px] max-h-[280px] md:min-h-[400px] md:min-w-[300px]"
            alt="Ana Buda"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StorySection;
