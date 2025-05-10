import Image from "next/image";
import Button from "@/components/ui/Buttons/button";

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js 3!</h1>
      <Image src="/file.svg" alt="file_svg" width={100} height={100} />
      <Button />
    </div>
  );
}
