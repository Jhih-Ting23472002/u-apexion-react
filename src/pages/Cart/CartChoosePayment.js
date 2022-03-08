import React from 'react';
import { Steps } from 'antd';

const CartChoosePayment = () => {
  const { Step } = Steps;
  return (
    <>
      <div className="container">
        <Steps size="small" current={1}>
          <Step title="付款方式" />
          <Step title="訂購人資訊" />
          <Step title="最後確認" />
        </Steps>
      </div>
    </>
  );
};

export default CartChoosePayment;
