"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "../ui/BrandLogo";
import NavList from "./NavList";
import SearchButton from "./SearchButton";
import MenuToggleButton from "./MenuToggleButton";
import Modal from "../ui/Modal";
import { menuMotion } from "@/app/utils/motionVariants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="sticky left-0 right-0 top-0 z-50 bg-white shadow-lg ">
        <div className="container py-6">
          <nav className=" flex items-center justify-between gap-2  sm:gap-5">
            <div className="md:hidden">
              <MenuToggleButton
                toggleHandler={toggleHandler}
                isMenuOpen={isMenuOpen}
              />
            </div>
            <BrandLogo />
            <div className="hidden  md:block">
              <NavList />
            </div>
            <SearchButton />
          </nav>
        </div>
      </div>
      {/* mobile devices Navbar  */}
      <div className="block md:hidden">
        <AnimatePresence>
          {isMenuOpen ? (
            <Modal clickHandler={toggleHandler}>
              <motion.div
                className=" w-full  bg-white "
                key="menu"
                initial="initial"
                animate="animate"
                exit="initial"
                variants={menuMotion}
              >
                <div className="container max-w-[640px] py-5">
                  <NavList />
                </div>
              </motion.div>
            </Modal>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
