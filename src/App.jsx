import Maincard from "./component/Maincard";
import Sidecard from "./component/Sidecard";

const App = () => {
  return (
    <>
      <div className=" bg-fuchsia-100 p-2 lg:p-12 w-full mx-auto ">
        <h2 className=" text-xl font-bold text-rose-900 text-center w-auto  mx-auto mb-8">
          A Tailus Blocks subscription gives you access to <br /> our components
          and more
        </h2>
        <div className=" lg:flex flex flex-col lg:flex-row justify-center items-center gap-0 ">
          <Maincard />
          <Sidecard />
        </div>
      </div> 
    </>
  );
};

export default App;
