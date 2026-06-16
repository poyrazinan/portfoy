import { Portfolio } from "@/components/Portfolio";
import { getHomeData } from "@/lib/getHomeData";

// Revalidate periodically; the /api/revalidate webhook can force it on publish.
export const revalidate = 60;

export default async function HomePage() {
  const data = await getHomeData();
  return <Portfolio data={data} />;
}
