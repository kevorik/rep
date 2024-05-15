import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Main from "@/components/common/Main";


export default function Home() {
  return (
    <>
    <Navbar />
    <Main />
    <Footer />
    </>
  )
}
