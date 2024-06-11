import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Company was started by Mr. Manish in 2019. We are a leading provider of telecommunication and construction services, 
            offering a wide range of solutions to meet the needs of our clients.
             Our services include the installation of telecommunication networks, construction of buildings and towers, and the provision of electrical and civil works.
          </p>
          <p>
          At MS Global Telecom Services, we pride ourselves on our dedication to quality, safety, and customer satisfaction. Our highly skilled team ensures that every project is executed with precision and care, from initial planning and
           design to installation and ongoing support. We believe in building lasting relationships with our clients by providing exceptional service and 
          support throughout the lifecycle of our projects.Join us as 
          we continue to drive innovation and excellence in the telecommunication and construction industries, delivering solutions that power the future.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="60" label="Underpaid employees" />
          <StatListItem value="20" label="Placated clients" />
          <StatListItem value="5 Cr" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
