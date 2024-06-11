import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Outdoor Work">
              Setting up an infrastructural network of underground copper and optical fiber cables, 
              including route surveys, trenching, cable laying/pulling, duct and warming tape installation, splicing, termination, and testing of cables.
              Removal of old and outdated telecommunication networks.

            </ListItem>
            <ListItem title="Indoor Work">
              Layout planning for equipment installations.
              Supply, installation, testing, and commissioning of equipment like STM-1, STM-4, repeaters, MDF, etc.
              Installation and commissioning of power room equipment and related works.
              Planning of air conditioning plants.
            </ListItem>
            <ListItem title="Civil Work">
              Construction of buildings, BTS towers, shelters, casting of pillars, sub-pillars, 
              foundations, route markers, cable markers, manholes, hand holes, jointing pits, and restoration works.
            </ListItem>
            <ListItem title="Electrical Work">
              Supply, erection, and commissioning of HT & LT electrical works, turnkey projects for lighting, power & security systems, DG sets, street lighting, and AMCs for operation & maintenance.
              Providing consultancy services for both new and old electrical installations.
              Comprehensive training and documentation, ongoing support, maintenance diagnosis, and fault finding.

            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
