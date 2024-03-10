import OrderHeader from "@/components/layout/OrderHeader";
import { useTranslations } from "next-intl";
import OrderForm from "./OrderForm";

const Order = () => {
  const t = useTranslations("order");
  return (
    <div>
      <OrderHeader />
      <div className="  bg-light-gray ">
        <div className=" bg-white space-y-8 rounded-[16px] px-4 lg:px-12 py-12 container max-w-[1024px]">
          <div className=" space-y-2">
            <h2 className=" text-4xl font-bold">{t("title")}</h2>
            <p className=" text-lg text-dark-purple font-medium">
              {t("description")}
            </p>
          </div>
          <div>
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
