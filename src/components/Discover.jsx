import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Market Research: The company conducts thorough market research to understand customer needs, preferences, and 
          current market trends. This includes studying demographics, usage patterns, and emerging technologies.
        </p>
        <p>
        Feasibility Studies: They perform feasibility studies to assess the viability of new services or expansion plans. 
        This includes technical, financial, and regulatory considerations.
        </p>
        <p>
        Network Planning: Based on research and feasibility studies, the company plans the network architecture, identifying optimal locations for infrastructure like cell towers and fiber optic cables.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
