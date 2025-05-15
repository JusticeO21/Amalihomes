import React from "react";
import { TextPair, LeaderCard } from "../../molecules";
import { Container } from "../../atoms";
import { GridContainer } from "../../atoms";

interface Leaders {
  name: string;
  role: string;
  imageUrl: string;
  imageAlt: string;
  description?: string;
  id: string | number;
}

interface LeadershipTeamProps {
  description: string;
  heading: string;
  descriptionClass?: string;
  headingClass?: string;
  leaders: Leaders[];
  className?: string;
  cardSize?: "sm" | "md" | "lg";
  textAlignment?: "left" | "center" | "right";
  gridVariant?: "sm" | "md" | "lg";
  gridGap?: "sm" | "md" | "lg" | "xl";
  emptyState?: React.ReactNode;
}

export const LeadershipTeam = React.memo(
  ({
    description,
    heading,
    descriptionClass = "",
    headingClass = "",
    leaders,
    className = "",
    cardSize = "md",
    textAlignment = "center",
    gridVariant = "sm",
    gridGap = "lg",
    emptyState = null,
  }: LeadershipTeamProps) => {
    if (!leaders?.length) {
      return emptyState ? <Container className={className}>{emptyState}</Container> : null;
    }

    return (
      <section
        aria-labelledby="leadership-heading"
        className={className}
      >
        <Container className="grid gap-40">
          <TextPair
            id="leadership-heading"
            spacing="md"
            description={description}
            header={heading}
            descriptionClass={descriptionClass}
            headerClass={`text-24 leading-32 md:text-32 md:leading-40 lg:text-[40px] lg:leading-48 ${headingClass}`}
            className={`max-w-[670px] mx-auto text-${textAlignment}`}
            align={textAlignment}
          />

          <GridContainer
            responsive={gridVariant}
            gap={gridGap}
          >
            {leaders.map((leader) => (
              <LeaderCard
                key={leader.id}
                size={cardSize}
                headerClass="!text-white text-18 leading-26"
                descriptionClass="!text-white"
                headerAs="h3"
                overlay="dark"
                title={leader.name}
                description={leader.role}
                imageUrl={leader.imageUrl}
                imageAlt={leader.imageAlt || `${leader.name}'s profile picture`}
              />
            ))}
          </GridContainer>
        </Container>
      </section>
    );
  },
);

LeadershipTeam.displayName = "LeadershipTeam";
