

import { PRODUCTS } from "@/lib/constants";


async function OurProductSection() {
  const dynamic =(await import("next/dynamic")).default;
  const ProductCard = dynamic(() => import("../cards/ProductCard"));
  const MainButton = dynamic(() => import( "../common/MainButton"));
  return (
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
  );
}

export default OurProductSection;
