import { notFound } from "next/navigation";

export default function CatchAll() {
  notFound(); // This will trigger the global `not-found.tsx` page
}
