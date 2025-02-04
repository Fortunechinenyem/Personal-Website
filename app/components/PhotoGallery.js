import Image from "next/image";

const PhotoGallery = () => {
  const images = [
    "/images/pix8.jpg",
    "/images/pix9.jpg",
    "/images/pix10.jpg",
    "/images/pix11.jpg",
    "/images/pix12.jpg",
  ];

  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold">Photo Gallery</h2>
      <p className="text-lg mt-4 mb-8 italic opacity-80">
        “A picture, they say, is worth a thousand words.”
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 md:px-12">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
