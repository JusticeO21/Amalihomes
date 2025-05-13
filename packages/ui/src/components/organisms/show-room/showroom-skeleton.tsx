import { GridContainer, Container } from "../../atoms";

export function ShowroomSkeleton() {
  return (
    <section>
      <Container>
        {/* Skeleton for TextPair */}
        <div className="max-w-[700px] mx-auto mb-[40px]">
          <div className="h-10 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Skeleton for Tabs */}
        <div className="flex gap-24 mb-[64px] w-full overflow-x-scroll scrollbar-hidden">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-10 w-24 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>

        {/* Skeleton for GridContainer */}
        <GridContainer
          gap="lg"
          responsive="sm"
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-64 bg-gray-200 rounded-lg animate-pulse"
            ></div>
          ))}
        </GridContainer>
      </Container>
    </section>
  );
}
