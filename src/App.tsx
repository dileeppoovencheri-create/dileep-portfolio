import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { CaseStudyWarranty } from "@/pages/CaseStudyWarranty";
import { CaseStudyDental } from "@/pages/CaseStudyDental";
import { CaseStudyInfluencer } from "@/pages/CaseStudyInfluencer";
import { CaseStudyHairCare } from "@/pages/CaseStudyHairCare";
import { useHashRoute } from "@/hooks/useHashRoute";

export default function App() {
  const route = useHashRoute();

  let page = <Home />;
  if (route === "about") {
    page = <About />;
  } else if (route === "case/warranty-management") {
    page = <CaseStudyWarranty />;
  } else if (route === "case/b2b-dental-platform") {
    page = <CaseStudyDental />;
  } else if (route === "case/influencer-management") {
    page = <CaseStudyInfluencer />;
  } else if (route === "case/pro-age-hair-care") {
    page = <CaseStudyHairCare />;
  }

  return <SmoothScrollProvider>{page}</SmoothScrollProvider>;
}
