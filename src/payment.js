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
          image: 'https://img.flaticon.com/icons/png/512/45/45552.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
          description: 'E-commerce',
          prefill: {
              contact: 9876543210,
              email: 'truyum.test123@mail.com'
          },
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