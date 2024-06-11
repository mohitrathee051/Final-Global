import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Infrastructure Development: The company constructs the physical infrastructure required for their services. This includes building cell towers, laying fiber optic cables, and setting up data centers.

        </p>
        <p>
        Technology Implementation: They implement advanced technologies to enhance network capabilities. This might involve deploying new generations of mobile networks (e.g., 5G), upgrading existing systems, and integrating new hardware and software solutions.

        </p>
        <p>
        Testing and Optimization: Once the infrastructure is in place, the company conducts extensive testing to ensure everything operates smoothly. They optimize the network for maximum performance, reliability, and security.

        </p>
      </div>
      <Blockquote
        author={{ name: "MS Global", role: "CEO" }}
        className="mt-12"
      >
        “MS Global Telecom Services has been instrumental in helping us build a robust and reliable network infrastructure. Their expertise and dedication have been invaluable to our success.”
      </Blockquote>
    </Section>
  );
};

export default Build;
