import Image from "next/image";
import Adacell from "public/adacell.png";
import airtel from "public/airtel.png";
import gmda from "public/gmda.png";
import igl from "public/igl gas.png";
import jio from "public/jio.png";
import lNt from "public/l&t.png";
import reliance from "public/RELIANCE.png";
import tata from "public/tata.png";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Adacell", Adacell],
  ["Airtel", airtel],
  ["GMDA", gmda],
  ["IGL", igl], 
  ["Jio", jio],
  ["L&T", lNt],
  ["Reliance", reliance],
  ["Tata", tata],
];
const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We have worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} width={150} height={100} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
