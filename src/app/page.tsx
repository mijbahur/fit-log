import { Suspense } from "react";
import Library from '../components/Library';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense
        fallback={
          <section
            id="library"
            className="mt-6 flex min-h-64 flex-col items-center justify-center gap-3 px-4 text-muted"
            aria-live="polite"
          >
            <span className="loading loading-spinner loading-lg text-[#C2F800]" />
            <p>Loading workouts…</p>
          </section>
        }
      >
        <Library />
      </Suspense>
    </>
  );
};

export default HomePage;