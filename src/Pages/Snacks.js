import { useState } from "react";
import style from "../Styles/Home.module.css";
import { useOrderValue } from "../Contexts/OrderContext";
import Card from "../Components/Card";
import { Circles } from "react-loader-spinner";
function Snacks() {
  const [search, setSearch] = useState();
  const { Products, isLoading } = useOrderValue();
  if (!Products.snacks) {
    return (
      <div className={style.spinnerDiv}>
        <Circles color="#6e62e1" />
      </div>
    );
  }
  return (
    <div>
      <p className="font-semibold text-3xl text-center border border-gray-100 w-[150px] p-2 mx-auto my-8 rounded-lg shadow-lg">
        Snacks
      </p>
      <div className="w-6/12 mx-auto mb-8">
        <input
          placeholder="Search snacks..."
          className={`${style.input} w-[100%] shadow-xl`}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-evenly">
        {Products.snacks.map((item, index) => {
          if (search) {
            if (item.name.toLowerCase().includes(search.trim().toLowerCase())) {
              return <Card product={item} key={index} item="snacks" />;
            } else return null;
          } else {
            return <Card product={item} key={index} item="snacks" />;
          }
        })}
      </div>
    </div>
  );
}

export default Snacks;
