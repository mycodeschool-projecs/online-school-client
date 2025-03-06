"use client";
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { determinePath } from "@/modules/utils/utils";

const NavBar = () => {
  const links = [
    { text: "Acasa", url: "/" },
    { text: "Instructor", url: "/instructor" },
    { text: "Cursuri", url: "/courses" },
    { text: "Contact", url: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="hidden md:flex w-1/2 min-h-full flex-row items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.ul
        className="flex flex-row gap-6 items-center"
        variants={containerVariants}
      >
        {links.map((link, index) => (
          <NavLink key={index} link={{ ...link, url: determinePath(link.url) }}  />
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default NavBar;
