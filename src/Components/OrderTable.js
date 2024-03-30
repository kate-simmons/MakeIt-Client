import style from "../Styles/Orders.module.css";

// This is the ordertable for every order the user place.
function OrderTable({ order }) {
  // this order prop comes form parent here which is... Orders page
  // every order will have its not information which will be added to table below
  const { date, cartItems, totalPrice, address } = order;
  console.log(cartItems);
  return (
    <div className={`${style.order} poppins border `}>
      <h3 className={style.orderDate}>Ordered On: &nbsp; {date}</h3>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Ingredients</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="py-2">
                  <p>{item.name}</p>
                  {item.packet ? <p>packet (1 Serving)</p> : null}
                </div>
              </td>
              {item.selected?.length ? (
                <td className="w-[250px] px-2 py-4">
                  <ol className="text-left text-[12px] ">
                    {item.selected.map((sel, k) => (
                      <li key={k}>
                        {k + 1}.&nbsp;
                        {sel}
                      </li>
                    ))}
                  </ol>
                </td>
              ) : <td>-</td>}

              <td>₹ {item.price}</td>
              <td>{item.qty}</td>
              <td>₹ {item.qty * item.price}</td>
            </tr>
          ))}
          <tr className="text-right">
            <td
              colSpan="5"
              className="border-t border-gray-200"
            >
              <p className="font-semibold pr-7">
                Address: <span className="font-medium">{address}</span>
              </p>
            </td>
          </tr>
          <tr className={style.lastRow}>
            <td
              colSpan="5"
              className="border-t border-gray-200"
            >
              <p>Delivery Fee: ₹ {0}/- </p> <p>Platform Fee: ₹ {3}/- </p>
              <p className="font-semibold">Grand Total: ₹ {totalPrice}/-</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
