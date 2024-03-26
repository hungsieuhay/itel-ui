import { Button } from "@/components/button";
import { simCategory } from "@/mock";
import { SimCategory } from "./_components/sim-category";

const HomePage = () => {
  return (
    <div className="h-full bg-neutral-0">
      <div className="aspect-video w-full h-full bg-[url('/images/banner.png')] bg-top bg-cover relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-[50%]">
          <Button type="secondary" size="large">
            Khám phá ngay
          </Button>
        </div>
      </div>
      <div className="bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-4">
            {simCategory.map((sim) => {
              return (
                <SimCategory
                  key={sim.id}
                  subTitle={sim.subTitle}
                  title={sim.title}
                  src={sim.src}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
