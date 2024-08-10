
  import { PRODUCTS } from "@/lib/constants";
  import Hero from "../../public/images/hero.webp"

export default async function HomePage() {
  const dynamic =(await import("next/dynamic")).default;
  const ProductCard = dynamic(() => import("@/components/cards/ProductCard"))
  const MainButton = dynamic(() => import("@/components/common/MainButton"));
  const WithDynamicImage = dynamic(() => import("@/components/image"));
  // const  OurProductSection = dynamic(() => import("@/components/sections/OurProductSection"));
  // const ShareSetupSection = dynamic(() => import("@/components/sections/ShareSetupSection"));
  const data = [
    {
      imageUrl: "/images/btr_1.png",
      title: "Dining",
    },
    {
      imageUrl: "/images/btr_2.png",
      title: "Living",
    },
    {
      imageUrl: "/images/btr_3.png",
      title: "Bedroom",
    },
  ];


  return (
    <main className="bg-white">
       <section className="relative flex flex-col justify-center items-end w-full h-[calc(100vh-73px)] bg-no-repeat bg-cover bg-bottom">
   
      <div className="absolute">
       <WithDynamicImage image={Hero} />
       </div>
      <div className="absolute bg-[#FFF3E3] mx-4 md:mr-[56px] md:ml-0 inline-block rounded-[10px] px-4 md:px-[39px] pt-[37px]  md:pt-[62px] pb-[37px]">
        <p className="text-customBlack font-semibold text-normal">
          New Arrival
        </p>
        <p className="text-primary py-4 md:py-2 text-header leading-tight md:text-large font-bold">
          Discover Our <br /> New Collection
        </p>
        <p className="text-customGray text-[18px] mb-[46px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <MainButton text="BUY NOW" classes="w-[222px]" />
      </div>
    </section> 
    <section className="w-full overflow-x-hidden lg:pt-[200px] md:pt-[100px] h-full">
      <div>
        <p className="text-[32px] font-bold text-center">Browse The Range</p>
        <p className="text-20 text-customGray text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[30px] md:mt-[62px]">
        {data.map((item, index) => (
          <div key={index}>
            <div>
              <img
                src={item.imageUrl}
                alt="category image"
                className="h-[480px] rounded-[10px] object-cover"
              />
            </div>
            <p className="text-[19px] text-customBlack font-semibold mt-[30px] text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
    <section className="w-full overflow-x-hidden">
      <div>
        <p className="text-[32px] font-bold text-center">Our Product</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[30px]">
        {PRODUCTS.map((item, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-[32px]">
        <MainButton
          text="Show More"
          classes="bg-transparent hover:bg-transparent text-primary font-bold border border-primary h-[48px]"
        />
      </div>
    </section>
     
      <div className="mt-[56px]">
         {/* <ShareSetupSection />  */}
       </div>  
    </main>
  );
}
