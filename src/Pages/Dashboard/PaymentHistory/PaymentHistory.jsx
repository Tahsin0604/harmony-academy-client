import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const [secure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: paidHistory = [], iseLoading: paidHistoryLoading } = useQuery({
    queryKey: ["/enrolledClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secure(
        `/enrolledClasses?email=${user?.email}&sortType="dsc"`
      );
      return res.data;
    },
  });
  if (paidHistoryLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 dark:bg-white"></progress>
      </div>
    );
  }
  return (
    <div className="w-[calc(100vw-50px)] lg:w-[calc(100vw-420px)]">
      <SectionTitle
        subTitle="explore"
        title="Payment History"
        color={true}
        position="right"
      ></SectionTitle>

      <div className="overflow-x-auto  p-8 mt-4 bg-white dark:bg-slate-800 border rounded-sm  ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-slate-900 dark:text-white">
              <th></th>
              <th>Transaction Id</th>
              <th>Class</th>
              <th>Instructor Name</th>
              <th>Paid Amount</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {paidHistory.map((item, index) => (
              <tr
                key={item._id}
                className="text-slate-900 dark:text-white font-archivoNarrow text-base"
              >
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{item.transactionId}</td>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.paidAmount}</td>
                <td>{new Date(item.paidAt).toDateString()}</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
