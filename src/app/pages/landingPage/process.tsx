import Image from "next/image";

export default function Process() {
  return (
    <div
      className="grid grid-flow-col auto-cols-max min-h-128
      justify-center space-x-64 mb-12 mt-80"
    >
      <div>
        <figure className="max-w-lg">
          <Image
            className="h-40 max-w-full"
            src="/img/licensed.png"
            alt="licensedImage"
            width={150}
            height={100}
          />
          <figcaption className="mt-2 text-center text-2xl font-semibold">
            Licensed
          </figcaption>
        </figure>
      </div>
      <div>
        <figure className="max-w-lg">
          <Image
            className="h-40 max-w-full"
            src="/img/affordable.png"
            alt="affordableImage"
            width={150}
            height={100}
          />
          <figcaption className="mt-2 text-center text-2xl font-semibold">
            Affordable
          </figcaption>
        </figure>
      </div>
      <div>
        <figure className="max-w-lg">
          <Image
            className="h-40 max-w-full"
            alt="effectiveImage"
            src="/img/effective.png"
            width={150}
            height={100}
          />
          <figcaption className="mt-2 text-center text-2xl font-semibold">
            Effective
          </figcaption>
        </figure>
      </div>
      <div>
        <figure className="max-w-lg">
          <Image
            className="h-40 max-w-full"
            src="/img/easyToUse.png"
            alt="easyToUseImage"
            width={150}
            height={100}
          />
          <figcaption className="mt-2 text-center text-2xl font-semibold">
            Easy to Use
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
