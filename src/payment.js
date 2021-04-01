function initiatePayment(paymentHandlers, onOrderCreateFailure) {
  fetch('/api/orders', {
      method: 'POST'
  })
  .then(res => res.json())
  .then(res => {
      const options = {
          key: process.env.REACT_APP_RZP_KEY_ID,
          amount: res.amount,
          currency: res.currency,
          order_id: res.rzpOrderId,
          name: 'TruYum',
          image: 'https://workat.tech/images/At-144x144.png',
          description: 'E-commerce',
          theme: {
              color: '#84c225',
          },
          modal: {
              ondismiss: paymentHandlers.onDismiss || (() => {}),
              escape: false,
          },
          handler: response => {
              paymentHandlers.onSuccess &&
                  paymentHandlers.onSuccess({
                      ...response,
                      id: res.orderId,
                      amount: res.amount,
                      currency: res.currency,
                  });
          },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
  },
  err => {
      onOrderCreateFailure && onOrderCreateFailure(err);
  });
}

export { initiatePayment };