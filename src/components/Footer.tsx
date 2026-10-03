import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/20 bg-black">
            <div className="flex w-full flex-col items-center justify-between gap-3 py-8 text-center sm:flex-row sm:text-left">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="" width={24} height={24} />
                    <span className="font-display text-lg tracking-wider">
                        FITLOG
                    </span>
                </div>
                <p className="text-sm text-muted">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
}
