import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <div>
      <div className="bg-primary">
        <div
          className="grid grid-flow-col auto-cols-max min-h-128
      justify-center"
        >
          <div>
            <article className="text-pretty mt-6">
              <h1 className="text-5xl font-bold text-white">
                Convenient and
                <br />
                Affordable Therapy
                <br />
                Anytime, Anywhere.
              </h1>
              <p className="text-1xl text-white mt-2">
                A safe and supportive space where licensed
                <br /> therapists provide compassionate and effective
                <br /> therapy services.
              </p>
            </article>
            <Link
              href=""
              className="mt-4 bg-primaryOrange rounded-lg px-3
          py-2 font-semibold text-white text-xl"
            >
              Get Started
            </Link>
          </div>
          <div>
            <Image
              src="/img/session.png"
              alt="session"
              className="object-cover"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
