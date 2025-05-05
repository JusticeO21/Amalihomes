import { getEntry } from "@/lib/contentful/contentful";
import { TypeFaqsSkeleton } from "@/lib/contentful/types";
import { FaqsLoaderProps, FaqsProps, QuestionCategory } from "@amalihomes/ui/components/organisms/faqs/types";

type LoaderState<T> = {
  data: T | null;
  error: Error | null;
};

export const faqsLoader = async (): Promise<LoaderState<FaqsProps>> => {
  try {
    const response = await getEntry<TypeFaqsSkeleton>("faqs", { include: 5 });

    const { mainImage, questionCategories } = response.fields as unknown as FaqsLoaderProps;

    const formattedData: FaqsProps = {
      ...(response.fields as unknown as Omit<FaqsLoaderProps, "mainImage" | "questionCategories">),
      mainImage: {
        imageUrl: `https:${mainImage.fields.file.url}`,
        imageAlt: mainImage.fields.title,
      },
      questionCategories: questionCategories.map((category: QuestionCategory) => ({
        id: category.sys.id,
        title: category.fields.title,
        questions: category.fields.questionsAnswers.map((question) => ({
          id: question.sys.id,
          question: question.fields.question,
          answer: question.fields.answer,
        })),
      })),
    };

    return {
      data: formattedData,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error as Error,
    };
  }
};
