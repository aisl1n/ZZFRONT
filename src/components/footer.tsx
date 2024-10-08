import { FOOTER_TEXT } from "@/constants/categories";

export default function Footer() {
  return (
    <>
      <footer className="bottom-0 flex h-[167px] w-full items-center justify-center bg-black p-4 text-center text-[12px] text-white">
        <p>{FOOTER_TEXT}</p>
      </footer>
    </>
  );
}
