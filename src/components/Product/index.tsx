import React from "react";
import Image from "next/image";
import Button from "../UI/Button";
import ShopIcon from "../Icons/Shop";

export interface ProductProps {
  imageMob?: any;
  imageDesk?: any;
  tag: string;
  title: string;
  description: string;
  price: number;
  discount: number;
}

const Product: React.FC<ProductProps> = ({
  imageMob,
  imageDesk,
  tag,
  title,
  description,
  price,
  discount,
}) => {

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 rounded-[0.8rem] bg-white">
      <div>
        <div className="block sm:hidden">
          { imageMob ? <Image src={imageMob} width={350} height={240} alt={title} layout="responsive" className="rounded-t-[0.8rem]" /> : null}
        </div>
        <div className="hidden sm:block">
          { imageDesk ? <Image src={imageDesk} width={350} height="561" alt={title} layout="responsive" className="rounded-l-[0.8rem]" /> : null}
        </div>
      </div>
      <div className="grid py-[2.5rem] px-[1.5rem]">
        <p className="font-sans-serif uppercase tracking-[0.8vw]">{tag}</p>
        <h1 className="font-serif capitalize text-dark-blue text-[34px] leading-[1em] sm:mt-[28px] mt-[20px]">{title}</h1>
        <p className="font-sans-serif text-dark-graylish leading-[1.5em] sm:mt-[35px] mt-[27px]">{description}</p>
        <div className="grid grid-cols-2 gap-[20px] items-center	sm:mt-[37px] mt-[32px]">
          <div><p className="text-green-primary text-[32px] text-greenButton-primary font-serif font-bold">{ "$" + price}</p></div>
          <div><p className="text-green-primary text-[14px] font-sans-serif text-dark-graylish line-through">{ "$" + discount}</p></div>
        </div>
        <div className="flex self-end">
          <Button
            className="sm:mt-[31px] mt-[22px]" 
          >
            <div className="flex items-center justify-center">
              <ShopIcon /> <p className="ml-[10px] text-[14px] font-sans-serif">Add to Cart</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
