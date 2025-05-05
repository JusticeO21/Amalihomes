"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Container, Tab } from "../../atoms";
import options from "./rich-text";
import { QuestionProps } from "./types";

type QuestionsComponentProps = {
  questionCategories: QuestionProps[];
};

const Questions = ({ questionCategories }: QuestionsComponentProps) => {
  const searchParams = useSearchParams();
  const defaultCategory = questionCategories[0]?.title ?? "";
  const initialCategory = searchParams.get("faq") ?? defaultCategory;

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const currentCategory = useMemo(
    () => questionCategories.find((category) => category.title === activeCategory),
    [questionCategories, activeCategory],
  );

  const isEmptyCategory = currentCategory?.questions?.length === 0;

  useEffect(() => {
    const categoryFromUrl = searchParams.get("faq");
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  return (
    <Container
      className="overflow-hidden space-y-24 sm:space-y-20 my-24 sm:my-64"
      marginY={0}
    >
      {/* Category Tabs */}
      <div className="flex items-center gap-4 w-screen overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {questionCategories.map((category) => {
          const isActive = activeCategory === category.title;
          return (
            <Tab
              key={category.id}
              label={category.title}
              href={`?faq=${category.title}`}
              focused={isActive}
            />
          );
        })}
      </div>

      {/* Questions Accordion */}
      <div>
        <Accordion type="multiple">
          {currentCategory?.questions?.map((question) => (
            <AccordionItem
              key={question.id}
              value={question.id}
            >
              <AccordionTrigger label={question.question} />
              <AccordionContent>
                <div className="px-20">{documentToReactComponents(question.answer, options)}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {isEmptyCategory && <p className="text-gray-500 text-center py-8">No questions found in this category.</p>}
      </div>
    </Container>
  );
};

export default Questions;
