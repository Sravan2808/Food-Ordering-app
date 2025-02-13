import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="bg-orange-500 h-screen w">
        <center>

      <img className="object-fill pt-20 "
        src="https://www.shutterstock.com/image-vector/404-error-page-funny-design-260nw-1761026456.jpg"
        alt=""
        />
        </center>
        <center>

      <h3>
        {err.status}: {err.statusText}
      </h3>
        </center>
    </div>
  );
};
export default Error;
