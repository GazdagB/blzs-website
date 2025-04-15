"use client";

import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useTransitionRouter } from "next-view-transitions";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import { animate } from "../utils/animationUtils";

interface NavbarTypes {
  activeLink: string;
}

type SmoothScrollLink = {
  type: "smoothScroll";
  text: string;
  name: string;
  href: string;
};

type PageTransitionLink = {
  type: "pageTransition";
  text: string;
  name: string;
  href: string;
  direction: "left" | "right" | "down";
};

type NavLink = SmoothScrollLink | PageTransitionLink;

const Navbar: React.FC<NavbarTypes> = ({ activeLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [flyOutOpen, setFlyOutOpen] = useState(false);

  const links: NavLink[] = [
    {
      type: "smoothScroll",
      text: "rólam",
      name: "about",
      href: "/about",
    },
    {
      type: "smoothScroll",
      text: "kapcsolat",
      name: "contact",
      href: "/contact",
    },
    {
      type: "pageTransition",
      text: "graphic design",
      name: "design",
      href: "/design",
      direction: "left",
    },
    {
      type: "pageTransition",
      text: "digital art",
      name: "art",
      href: "/art",
      direction: "down",
    },
    {
      type: "pageTransition",
      text: "digital print",
      name: "digital print",
      href: "/print",
      direction: "right",
    },
  ];

  const router = useTransitionRouter();

  const handleChangePage = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    destination: string,
    direction: "left" | "down" | "right"
  ) => {
    e.preventDefault();

    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        router.push(destination, {
          onTransitionReady: () => {
            animate(direction);
          },
        });
      }, 300);

      return;
    }

    router.push(destination, {
      onTransitionReady: () => {
        animate(direction);
      },
    });
  };

  const handleSmoothScroll = (targetId: string, offset: number) => {
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = offset;
      const elementPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      //If Mobile Navbar is open
      if (isOpen) {
        //Close It
        setIsOpen(false);
        // After 300ms scroll to position
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 300);

        //Esc the function
        return;
      }

      //Else just scroll to the target immidiatly
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup when component unmounts
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className="text-blzs-teal font-bold md:rounded-md max-w-[1250px] bg-white/80 backdrop-blur-lg py-7 z-10 w-full flex fixed top-0 right-[50%] translate-x-[50%] items-center justify-between px-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="logo font-sans flex items-center jusitfy-center gap-2">
          KOVÁCS BALÁZS <br className="md:hidden" />{" "}
          <span className="hidden md:block">-</span> GRAFIKUS.
        </div>

        <div className="block lg:hidden">
          <Hamburger
            rounded
            color="#005A67"
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>

        {/* Navbar List */}
        <ul className="hidden lg:flex items-center gap-7">
          <div className="relative">
            <li
              onClick={() => {
                setFlyOutOpen((prev) => !prev);
              }}
              className="flex items-center justify-center gap-2 cursor-pointer pb-1"
            >
              <FaCaretDown
                className={`${
                  flyOutOpen ? "rotate-180" : ""
                } transition-all duration-300`}
              />
              SZAKTERÜLET
            </li>

            <AnimatePresence>
              {flyOutOpen && (
                <motion.div
                  initial={{ y: -20, opacity: 0, height: 0 }}
                  animate={{ y: 0, opacity: 1, height: 200 }}
                  exit={{ y: -20, opacity: 0, height: 0 }}
                  className="bg-white flex flex-col items-center justify-center backdrop-blur-lg shadow-md rounded-md h-20 w-50 absolute top-15"
                >
                  <div >
                    {/* Fly out links */}
                    {links.map((link, id) => {
                      const isLast = id === links.length - 1;

                      if (link.type === "pageTransition" && link.direction) {
                        if (isLast) {
                          return (
                            <Link
                              onClick={(e) => {
                                handleChangePage(e, link.href, link.direction);
                              }}
                              key={id}
                              href={link.href}
                            >
                              {link.name.toUpperCase()}
                            </Link>
                          );
                        } else {
                          return (
                            <>
                              <Link
                                onClick={(e) => {
                                  handleChangePage(
                                    e,
                                    link.href,
                                    link.direction
                                  );
                                }}
                                key={id}
                                href={link.href}
                              >
                                {link.text.toUpperCase()}
                              </Link>
                              <div className="h-[2px] w-full bg-blzs-teal my-2"></div>
                            </>
                          );
                        }
                      }
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {links.map((link, id) => {
            if (link.type === "smoothScroll") {
              return (
                <div className="flex items-center justify-center" key={id}>
                  
                    <div className="h-5 w-0.5 me-7 bg-gray-500"></div>
                    <li
                      key={id}
                      onClick={() => {
                        handleSmoothScroll(link.name, 150);
                      }}
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <div className="h-7 w-full flex flex-col items-center">
                        {link.text.toUpperCase()}
                        <AnimatePresence>
                          {activeLink === link.name && (
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              exit={{ width: 0 }}
                              className="w-full h-1 rounded-full bg-blzs-teal origin-center"
                            ></motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </li>
                </div>
              );
            }
          })}
        </ul>
      </motion.nav>

      {/* Menu Navbar Animated Mobile */}
      <motion.div
        className="lg:hidden w-[100svw] flex flex-col items-center justify-center h-[100vh] fixed top-0 right-0 z-0 bg-white"
        initial={{ y: "-100%" }}
        animate={isOpen ? { y: 0 } : {}}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <ul className="text-xl text-blzs-teal flex flex-col gap-2.5 justify-center items-center">
          <li
            onClick={() => {
              handleSmoothScroll("about", 100);
            }}
            className="cursor-pointer"
          >
            RÓLAM
          </li>
          <li
            onClick={() => {
              handleSmoothScroll("contact", 100);
            }}
            className="cursor-pointer"
          >
            KAPCSOLAT
          </li>
          {/* <li
          className="cursor-pointer"
          >BLOG</li> */}
        </ul>
        <div className="h-[1.5px] w-40 bg-blzs-teal my-5"></div>
        <ul className="text-xl text-blzs-teal flex flex-col gap-2.5 justify-center items-center mb-10">
          <Link
            onClick={(e) => {
              handleChangePage(e, "/design", "left");
            }}
            href={"/design"}
          >
            DESIGN
          </Link>
          <Link
            onClick={(e) => {
              handleChangePage(e, "/art", "down");
            }}
            href={"/art"}
          >
            ART
          </Link>
          <Link
            onClick={(e) => {
              handleChangePage(e, "/print", "down");
            }}
            href={"/print"}
          >
            PRINT
          </Link>
        </ul>

        <div className="flex items-center gap-4">
          <Image
            src={"/icons/instagram-teal.png"}
            width={30}
            height={30}
            alt="TikTok Icon"
          />
          <Image
            src={"/icons/linkedin-teal.png"}
            width={30}
            height={30}
            alt="TikTok Icon"
          />
          <Image
            src={"/icons/tiktok-teal.png"}
            width={30}
            height={30}
            alt="TikTok Icon"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
