import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Hearts } from "react-loader-spinner";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <>
      <div className={`loading-overlay ${isLoading ? "visible" : "hidden"}`}>
        <Hearts
          height="200"
          width="200"
          color="#f70c0c"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      {!isLoading && <Home />}
    </>
  );
}

export default App;
