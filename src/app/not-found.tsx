import Link from "next/link";

export default function NotFound() {
    return (
        <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center">
            <p className="font-display text-8xl font-bold text-[#C2F800]">404</p>
            <h1 className="font-display mt-4 text-3xl font-bold uppercase tracking-wide">
                Rep not found
            </h1>
            <p className="mt-3 text-muted">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
            </p>
            <Link
                href="/"
                className="btn bg-[#C2F800] text-black mt-8 border-0 font-bold uppercase"
            >
                Back to workouts
            </Link>
        </section>
    );
}
