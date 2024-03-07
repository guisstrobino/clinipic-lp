import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";

import icon from "../assets/icon.png";

export function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useClickAway(ref, () => setIsOpen(false));

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
        };

        handleResize(); // Call on mount

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <img src={icon} />
                    <p className={styles.title}>Clinipic</p>
                </div>
                {showMenu ? (
                    <div className={styles.iconMenuWrapper}>
                        <button onClick={toggleMenu}>
                            {isOpen ? (
                                <IoClose size={40} className={styles.icon} />
                            ) : (
                                <IoMenu size={40} className={styles.icon} />
                            )}
                        </button>
                    </div>
                ) : (
                    <div className={styles.menuWrapper}>
                        <button className={styles.buttonWrapper}>
                            <p>Funcionalidades</p>
                        </button>
                        <button className={styles.buttonWrapper}>
                            <p>Planos e preços</p>
                        </button>
                        <button className={styles.buttonWrapper}>
                            <p>Contato</p>
                        </button>
                    </div>
                )}
            </div>
            {isOpen && showMenu && (
                <AnimatePresence>
                    <motion.div
                        initial={{ y: "-100vh", scale: 0.8 }}
                        animate={{
                            y: isOpen ? 0 : "-100vh",
                            scale: isOpen ? 1 : 0.8,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        className={styles.mobileMenu}
                        ref={ref}
                    >
                        <button className={styles.mobileButtonWrapper}>
                            <p>Funcionalidades</p>
                        </button>
                        <button className={styles.mobileButtonWrapper}>
                            <p>Planos e preços</p>
                        </button>
                        <button className={styles.mobileButtonWrapper}>
                            <p>Contato</p>
                        </button>
                        {/* </div> */}
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
}
