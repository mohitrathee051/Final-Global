import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Service Launch: The company launches the new or upgraded services to the market. 
          This involves marketing campaigns, customer education, and promotional offers to attract users.
        </p>
        <p>
          Customer Support: They provide robust customer support to assist users with any issues or questions. 
          This includes call centers, online support, and on-site technicians.
        </p>
        <p>
        Ongoing Maintenance and Upgrades: The company continuously monitors the network to maintain high service standards.
        They perform regular maintenance and make upgrades as needed to keep up with technological advancements and changing customer demands.
        </p>
      </div>
    </Section>
  );
};

export default Deliver;
