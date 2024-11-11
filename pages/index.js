import Image from "next/image";

export default function Home() {
  return (
    <>
      <div class="flex flex-col-reverse md:flex-row md:space-x-8">
        <div class="flex-1 bg-white p-4">
          <h2 className="uppercase font-bold text-2xl md:flex justify-center mb-6 text-gray-600">
            the baker
          </h2>
          <p className="text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="flex-1 bg-white p-4">
          <div className="relative w-full h-auto">
            <Image
              src="/images/bannerImg.jpg"
              alt="Banner Image"
              layout="intrinsic" // Image maintains aspect ratio and resizes according to width
              width={1200} // The natural width of the image
              height={600} // The natural height of the image
              className="shadow-lg"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-10 md:flex-row md:space-x-8">
        <div className="flex-1 bg-white p-4">
          <div className="relative w-full h-auto">
            <Image
              src="/images/bannerImg.jpg"
              alt="Banner Image"
              layout="intrinsic" // Image maintains aspect ratio and resizes according to width
              width={1200} // The natural width of the image
              height={600} // The natural height of the image
              className="shadow-lg"
            />
          </div>
        </div>

        <div class="flex-1 bg-white p-4">
          <h2 className="uppercase font-bold text-2xl md:flex justify-center mb-6 text-gray-600">
            the starter
          </h2>
          <p className="text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}
