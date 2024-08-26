import AccountsItem from "./item";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";

const Accounts = ({ accounts } : AccountsProps) => {
  const [api, setApi] = useState<CarouselApi>();

  const [total, setTotal] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTotal(api.scrollSnapList().length);

    const onScroll = () => {
      setActiveIndex(api!.selectedScrollSnap());
    };

    api.on("select", onScroll);

    return () => {
      api?.off("select", onScroll);
    };
  }, [api, accounts]);

  return (
    <>
      <Carousel setApi={setApi} className="flex flex-col gap-6">
        <CarouselContent>
          {accounts.map((account) => (
            <CarouselItem key={account.id}>
              <AccountsItem account={account} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex flex-row items-center max-h-5 justify-between">
          <button
            onClick={() => api?.scrollPrev()}
            disabled={activeIndex <= 0}
            className="w-20 flex flex-row items-center gap-1 text-sm disabled:text-[#D1D1D1] text-primary"
          >
            <IoChevronBackOutline size={16} />
            Previous
          </button>

          <CarouselDots />

          <button
            onClick={() => api?.scrollNext()}
            disabled={activeIndex >= total }
            className="w-20 flex flex-row items-center justify-end gap-1 text-sm disabled:text-[#D1D1D1] text-primary"
          >
            Next
            <IoChevronForwardOutline size={16} />
          </button>
        </div>
      </Carousel>
    </>
  );
};

export default Accounts;
