import "../styles/globals.css";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        span {
          color: white;
        }
      `}</style>
    </div>
  );
}
