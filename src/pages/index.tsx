import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Al Centro VR</title>
        <meta name="description" content="Al Centro VR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            color: "white",
            fontFamily: roboto.style.fontFamily,
            marginBottom: 20,
          }}
        >
          Al Centro VR
        </div>
        <div style={{ color: "white", fontFamily: roboto.style.fontFamily }}>
          Sito web in fase di creazione
        </div>
      </main>
    </>
  );
}
