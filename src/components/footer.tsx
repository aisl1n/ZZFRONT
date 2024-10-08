import { FOOTER_TEXT } from "@/constants/categories";

export default function Footer() {
  return (
    <>
      <footer className="flex w-full items-center justify-center bg-black p-4 text-center text-xs text-white">
        <p>{FOOTER_TEXT}</p>
      </footer>
    </>
  );
}
