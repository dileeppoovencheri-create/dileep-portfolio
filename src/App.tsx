import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { CaseStudyWarranty } from "@/pages/CaseStudyWarranty";
import { CaseStudyDental } from "@/pages/CaseStudyDental";
import { CaseStudyInfluencer } from "@/pages/CaseStudyInfluencer";
import { CaseStudyHairCare } from "@/pages/CaseStudyHairCare";
import { PasswordModal } from "@/components/ui/PasswordModal";
import { useHashRoute } from "@/hooks/useHashRoute";
import { usePortfolioUnlock } from "@/hooks/usePortfolioUnlock";

export default function App() {
  const route = useHashRoute();
  const { unlocked, tryUnlock } = usePortfolioUnlock();

  const isCaseStudyRoute = route.startsWith("case/");
  const needsUnlock = isCaseStudyRoute && !unlocked;

  // While a case-study route is locked, render Home in the background so the
  // page never goes blank. Once unlocked, the same `route` value swaps in the
  // real case-study page.
  let page = <Home />;
  if (route === "about") {
    page = <About />;
  } else if (isCaseStudyRoute && unlocked) {
    if (route === "case/warranty-management") {
      page = <CaseStudyWarranty />;
    } else if (route === "case/b2b-dental-platform") {
      page = <CaseStudyDental />;
    } else if (route === "case/influencer-management") {
      page = <CaseStudyInfluencer />;
    } else if (route === "case/pro-age-hair-care") {
      page = <CaseStudyHairCare />;
    }
  }

  // Cancelling the gate clears the case-study hash so Home stays put.
  const handleGateCancel = () => {
    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  };

  return (
    <SmoothScrollProvider>
      {page}
      <PasswordModal
        open={needsUnlock}
        onClose={handleGateCancel}
        onSubmit={tryUnlock}
      />
    </SmoothScrollProvider>
  );
}
