import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";
import { increateCount } from "../store.js";

function Cart() {
  let a = useSelector((state) => {
    return state.stock;
  });

  console.log(a);

  let state = useSelector((state) => state);

  let dispatch = useDispatch();
  return (
    <div>
      <h6>
        {state.user.name} {state.user.age}의 장바구니
      </h6>
      <button onClick={() => dispatch(increase())}>나이 먹기</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <Button
                  onClick={() => {
                    dispatch(increateCount(state.cart[i].id));
                  }}
                >
                  +
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>{" "}
    </div>
  );
}

export default Cart;
