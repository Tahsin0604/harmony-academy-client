import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/img/ErrorPic.jpg";
import Container from "../../components/Container";
const ErrorHandlingPage = () => {
  const error = useRouteError();
  return (
    <div className="h-screen flex justify-center items-center">
      <Helmet>
        <title>Harmony Academy | Error</title>
      </Helmet>

      <div className="flex flex-col justify-center items-center gap-16 md:gap-6 w-full ">
        <div className="w-full md:w-1/2">
          <img
            src={errorImg}
            alt=""
            className="h-[300px] w-[300px] rounded-lg mx-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
          <div className="w-full">
            <div className="max-w-lg text-center space-y-5 mx-auto">
              <h1 className="font-permanentMarker text-5xl font-bold text-red-600">
                Oops!
              </h1>
              <p className="font-permanentMarker text-3xl font-bold text-red-600">
                An Error Occurs
              </p>
              <p className="font-permanentMarker text-3xl font-bold text-red-600">
                <i>{error.statusText || error.message}</i>
              </p>
              <div>
                <Link
                  to="/"
                  className="bg-orange-400 hover:bg-orange-500 text-slate-50 px-4 py-1 rounded-md"
                >
                  Go Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandlingPage;
