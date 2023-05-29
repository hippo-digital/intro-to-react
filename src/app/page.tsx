import React from "react";
import TestList from "@/components/test-list";
import styles from "./page.module.scss"
import Head from "next/head";
import Header from "@/components/header";

export default function Home() {
  return (
      <>
          <Head>
              <title>Intro to react</title>
              <link rel="icon" href={"/favicon.ico"} />
          </Head>
          <Header />
          <main className={styles.main}>
              <TestList/>
          </main>
      </>
  )
}
