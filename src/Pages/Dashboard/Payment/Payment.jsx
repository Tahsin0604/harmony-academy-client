import { useParams } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
// import { CardElement, Elements, useElements, useStripe } from "../../src";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
  const params = useParams();
  const [selectedClasses, refetch, classLoading] = useSelectedClasses();
  if (classLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 dark:bg-white"></progress>
      </div>
    );
  }
  const selected = selectedClasses.find((item) => item._id === params.id);
  return (
    <div className="w-[calc(100vw-50px)] lg:w-[calc(100vw-420px)]">
      <Container>
        <div className="text-center">
          <SectionTitle
            subTitle="payment"
            title="Enrolled Now"
            color={true}
            position="right"
          ></SectionTitle>
        </div>

        <div className="p-4">
          <Elements stripe={stripePromise}>
            <CheckOutForm selected={selected}></CheckOutForm>
          </Elements>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
