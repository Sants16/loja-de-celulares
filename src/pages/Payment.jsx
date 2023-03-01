import { usePayment } from "../hooks/pages/usePayment";
import { Formater } from "../services/Formater";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { PaymentArea } from "../css/stylesPayment";
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
    <PaymentArea>
      <h2>Sua compra foi concluída com sucesso</h2>
      <span>
        <AiFillCheckCircle />
      </span>
      <h4>{`Valor ${Formater.valorMonetario(price)}`}</h4>
      <h4>{`Comprador: ${name}`}</h4>
      <h4>{`Prazo: ${time} dias`}</h4>
    </PaymentArea>
  );
};

export default Payment;
