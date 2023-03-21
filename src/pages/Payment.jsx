import { usePayment } from "../hooks/pages/usePayment";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { PaymentContainer, CantBuyContainer } from "../css/stylesPayment";
import { Loading } from "../components/Loading";

const Payment = () => {
  const { loading, name, price, time, status } = usePayment();

  return loading ? (
    <Loading />
  ) : status === "reject" ? (
    <CantBuyContainer>
      <div>
        <h2>Não foi possível concluir sua compra :(</h2>
        <span>
          <MdError />
        </span>
        <div>
          <p>
            Infelizmente a compra não foi realizada devido à saldo insuficiente
          </p>
          <p>Para mais informações entre em contato com o suporte</p>
        </div>
      </div>
    </CantBuyContainer>
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
