import OrderForm from "./OrderForm";

const Order = () => {
  return (
    <div className="  bg-light-gray pt-[120px]">
      <div className=" bg-white space-y-8 rounded-[16px] px-4 lg:px-12 py-12 container max-w-[1024px]">
        <div className=" space-y-2">
          <h2 className=" text-4xl font-bold">order form</h2>
          <p className=" text-lg text-dark-purple font-medium">
            fill out the form, and we will respond with a price quote within 2
            hours.
          </p>
        </div>
        <div>
          <OrderForm />
        </div>
      </div>
    </div>
  );
};

export default Order;
