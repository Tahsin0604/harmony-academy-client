import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { FaPrint } from "react-icons/fa";
import Logo from "../../../components/logo";

const CheckOutForm = ({ selected }) => {
  const componentRef = useRef(null);
  const [data, setData] = useState(null);
  const [paidDate, setPaidDate] = useState("");
  const amount = parseFloat(selected?.price.toFixed(2));
  const [secure] = useAxiosSecure();
  const { user } = useAuth();
  const [, refetch] = useSelectedClasses();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  useEffect(() => {
    if (amount > 1) {
      secure.post("/create-payment-intent", { amount }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        transactionId: paymentIntent.id,
        classId: selected.classId,
        className: selected.className,
        instructorName: selected.instructorName,
        studentName: user?.displayName,
        studentEmail: selected.studentEmail,
        paidAmount: selected.price,
        paidAt: new Date(),
      };

      secure.post(`/payment?id=${selected._id}`, payment).then((res) => {
        console.log(res.data.insertedResult.insertedId);
        if (res.data.insertedResult.insertedId) {
          refetch();
          toast.success("Payment complete");
          secure(`/enrolledClasses/${res.data.insertedResult.insertedId}`).then(
            (res) => {
              console.log(res.data);
              setData(res.data);
              const printingDate = new Date(res.data.paidAt);
              const year = printingDate.getFullYear();
              const month = printingDate.getMonth() + 1; // Months are zero-based
              var day = printingDate.getDate();
              const recivedDate = day + "/" + month + "/" + year;
              setPaidDate(recivedDate);
            }
          );
        }
      });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-8 p-4 bg-slate-300 rounded max-w-lg mx-auto"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          className="border p-4 rounded bg-slate-100"
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 mt-4 rounded-md  px-4 py-2"
          disabled={!stripe || processing || !clientSecret}
        >
          Pay
        </button>
      </form>
      {data && (
        <>
          <div
            ref={componentRef}
            className="bg-white w-full md:w-1/2 mt-7 mx-auto px-10 py-8 rounded-md  text-slate-900"
          >
            <div className="relative">
              <div>
                <div className="text-left ">
                  <Logo></Logo>
                </div>
                <div className="text-lg mt-10 font-archivoNarrow font-semibold space-y-2">
                  <h1>
                    Transaction Id:
                    <span className="font-normal ml-1">
                      {data.transactionId}
                    </span>
                  </h1>

                  <h1>
                    Name:{" "}
                    <span className="font-normal ml-1">{data.studentName}</span>
                  </h1>
                  <h1>
                    Student Email:{" "}
                    <span className="font-normal ml-1">
                      {data.studentEmail}
                    </span>
                  </h1>
                  <h1>
                    class Name:{" "}
                    <span className="font-normal ml-1">{data.className}</span>
                  </h1>
                  <h1>
                    Instructor Name:{" "}
                    <span className="font-normal ml-1">
                      {data.instructorName}
                    </span>
                  </h1>
                  <h1>
                    Paid Amount:{" "}
                    <span className="font-normal ml-1">{data.paidAmount}</span>
                  </h1>
                  <h1>
                    date: <span className="font-normal ml-1">{paidDate}</span>
                  </h1>
                </div>
              </div>
              <div className="bg-white bg-opacity-0 absolute inset-0"></div>
            </div>
          </div>
          <div className="flex justify-center">
            <ReactToPrint
              trigger={() => (
                <button className="bg-red-500 px-4 py-2 text-white mt-4 rounded-md font-semibold hover:bg-red-600 flex gap-2 items-center">
                  <FaPrint></FaPrint> Print Receipt
                </button>
              )}
              content={() => componentRef.current}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CheckOutForm;
