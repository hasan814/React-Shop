import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeColor="blue"
        strokeWidth="3"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
