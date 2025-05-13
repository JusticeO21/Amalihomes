"use client";
import { Suspense } from "react";
import { ShowroomContent, ShowroomProps } from "./showroom";
import { ShowroomSkeleton } from "./showroom-skeleton";

export function Showroom(props: ShowroomProps) {
  return (
    <Suspense fallback={<ShowroomSkeleton />}>
      <ShowroomContent {...props} />
    </Suspense>
  );
}
