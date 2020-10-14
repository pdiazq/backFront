import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";


class PayPalBtn extends React.Component {
    render() {
      const { amount, onSuccess, currency } = this.props;
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              options={{
                clientId: "ATKtaqm4KTPrpiLo_Jb3e209wvnbu7zK0PC14Uwvw1WSuKMISEuzIDkkMv1dEapOSUZBU_fsgOHxrD1a"
              }}
          />
        );
    }
}
export default PayPalBtn;