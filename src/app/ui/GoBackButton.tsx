"use client";

import { usePathname, useRouter } from "next/navigation";

export const GoBackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const goBackHandler = () => router.back();

  return pathname === "/" ? null : (
    <button
      onClick={goBackHandler}
      className="flex items-center justify-center top-10 left-10 absolute font-bold text-lg"
    >
      🡠
    </button>
  );
};
