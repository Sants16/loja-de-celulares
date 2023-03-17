import { usePayment } from "../hooks/pages/usePayment";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { PaymentContainer } from "../css/stylesPayment";
import { Loading } from "../components/Loading";

const Payment = () => {
  const { loading, name, price, saldo, time } = usePayment();

  return loading ? (
    <Loading />
  ) : saldo < price ? (
    <div>
      <p>Seu saldo é insuficiente</p>
      <span>
        <MdError style={{ fontSize: "45px", color: "red" }} />
      </span>
    </div>
  ) : (
    <PaymentContainer>
      <div>
        <h2>{name} sua compra foi concluída com sucesso</h2>
        <span>
          <AiFillCheckCircle />
        </span>
        <div>
          <h4>{price}</h4>
          <h4>{`${time} dias para entrega`}</h4>
        </div>
      </div>
    </PaymentContainer>
  );
};

export default Payment;
