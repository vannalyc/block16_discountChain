const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
}

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
}

const calculateFinalAmount = (customer) => {
    let finalAmount = customer.pricePerRefill * customer.refills;
  
    if (customer.subscription) {
      finalAmount *= 0.75; // Apply 25% subscription discount
    }
  
    if (customer.coupon) {
      finalAmount -= 10; // Apply $10 coupon discount
    }
  
    return finalAmount;
  };
  
  const timmyFinalAmount = calculateFinalAmount(timmy);
  const sarahFinalAmount = calculateFinalAmount(sarah);
  const rockyFinalAmount = calculateFinalAmount(rocky);
  
  console.log(`Timmy's grand total is $${timmyFinalAmount}.`);
  console.log(`Sarah's grand total is $${sarahFinalAmount}.`);
  console.log(`Rocky's grand total is $${rockyFinalAmount}.`);
  