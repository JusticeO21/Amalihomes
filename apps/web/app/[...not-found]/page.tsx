import { notFound } from "next/navigation";

export default function CatchAll() {
  notFound();
}


export const dynamic = "force-dynamic";
