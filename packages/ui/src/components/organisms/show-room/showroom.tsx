"use client";

import { Tab, GridContainer, Container } from "../../atoms";
import clsx from "clsx";
import { LeaderCard } from "../../molecules";
import { useSearchParams } from "next/navigation";
import { TextPair } from "../../molecules";

type Content = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  country: string;
};

type ShowroomItem = {
  id: string;
  label: string;
  content: Content[];
};

export interface ShowroomProps {
  tabs: ShowroomItem[];
  heading?: string;
  description?: string;
  defaultTab?: string;
  className?: string;
  purpose: string;
  tabClassName?: string;
  activeTabClassName?: string;
  contentClassName?: string;
}

export function ShowroomContent({
  tabs,
  defaultTab = tabs[0]?.label,
  heading,
  description,
  tabClassName = "",
  purpose,
  contentClassName = "",
}: ShowroomProps) {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get(purpose) || defaultTab;

  if (!tabs.length) return null;

  return (
    <section>
      <Container>
        <TextPair
          className="max-w-[700px] mx-auto mb-[40px]"
          header={heading}
          headerClass="text-24 leading-32 md:text-[32px] md:leading-40 lg:text-[40px] lg:leading-48"
          description={description}
        />

        <div
          role="tablist"
          aria-orientation="horizontal"
          className="flex gap-24 mb-[64px] w-full overflow-x-scroll scrollbar-hidden"
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              id={`tab-${tab.id}`}
              label={tab.label}
              href={`?${purpose}=${tab.label}`}
              className={clsx("text-center", tabClassName)}
              focused={tab.label === currentTab}
            />
          ))}
        </div>

        {tabs.map((tab) => (
          <GridContainer
            gap="lg"
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            responsive="sm"
            className={clsx(contentClassName, tab.label !== currentTab && "hidden")}
          >
            {tab.content.map((content) => (
              <LeaderCard
                className=""
                key={content.id}
                imageUrl={content.imageUrl}
                imageAlt={content.imageAlt}
                title={content.country}
                headerClass="!text-white !text-[24px]"
                align="center"
                size="sm"
                overlay="dark"
              />
            ))}
          </GridContainer>
        ))}
      </Container>
    </section>
  );
}
