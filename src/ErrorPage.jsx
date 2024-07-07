import { useRouteError } from "react-router-dom";
import Nav from "./Component/Nav";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
 <div id="error-page">
  <Nav/>
     <div className="flex flex-col items-center p-5" >
      <h1 className="text-6xl text-gray-500 font-light  ">SORRY!</h1>

      <p  className="text-4xl text-gray-500 font-light  ">we could'nt find that page.</p>
      <p>
     <img src="https://images-na.ssl-images-amazon.com/images/G/01/error/138._TTD_.jpg" alt="" />
      </p>
    </div>
 </div>
  );
}