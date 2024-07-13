// components/Gallery.js
import Image from "next/image";
import Image1 from "@/public/Images/home/21 studio.jpg";
// Add more imports as needed

// Add the rest of the images similarly

const images = [
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  // Add the rest of the image variables here
];

const GalleryBlock = () => {
  return (
    <div className="p-4  sm:pt-20">
      <div className="flex justify-between px-10 my-4 ">
        <div>
          <h2 className="text-2xl tracking-widest font-raleway mb-4 text-[#be9343] ">
            GALLERY
          </h2>
        </div>
        <div>
          <button className="px-4 py-2 sm:mt-0 mt-4 border-[#be9343] text-[#be9343] hover:bg-[#be9343] hover:text-white border-2 rounded-sm text-sm font-raleway tracking-widest shadow-xl">
            View More
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative h-48">
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryBlock;
