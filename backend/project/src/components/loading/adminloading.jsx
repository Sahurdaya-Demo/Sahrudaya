import Admin from "../admin/Admin";
import { useEffect, useState } from "react";
const Adminloading=()=>
{
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading screen
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <img src="loading.gif" alt="Loading" />
        </div>
      ) : (
      <Admin/>
    )}
    </>
    )
}
export default  Adminloading;