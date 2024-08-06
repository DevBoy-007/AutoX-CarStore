// frontend/src/components/Cart.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Replace 'your_publishable_key' with your actual Stripe publishable key
const stripePromise = loadStripe("pk_test_51PdAdPRtxL6V3k3BOTfS4cicKVMoN2QPGSKT0jULfudgedtLHVcKCxegLNbIBLyALaW0ZqjSTPxwkSbr2R7MVVe50092ymWwuE");

function Cart() {
  // Initialize AOS
  useEffect(() => {
   AOS.init({ duration: 1000 });
}, []);
  // =====================States===========================
  const [cartList, setCartList] = useState([]);
  //=========================Functions========================

  useEffect(() => {
    displayCarts();
  }, []);

  //==> Display Carts
  const displayCarts = async () => {
    try {
      const displayResponse = await axios.get("http://localhost:3000/Display-Cart/display-cart");
      setCartList(displayResponse.data.response);
      console.log(displayResponse.data.response, "display has runs");
    } catch (error) {
      toast.error(error.message);
    }
  };

  //==> Handle purchase button click
  const handlePurchase = async (_id, price, make, model, imageUrl) => {
    try {
      // Convert price to cents for Stripe
      //const money = Number(price);
      const amountInCents = price * 100;
      console.log('Initiating purchase for amount:', amountInCents); // Log the amount being sent
      // Create a checkout session on the backend
      const response = await axios.post('http://localhost:3000/api/stripe/create-checkout-session', {
        amount: amountInCents,
        _id: _id,
        make: make,
        model: model,
        imageUrl: imageUrl
      });
      console.log('Checkout Session response:', response.data); // Log the response from the backend

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.data.id,
      });

      if (error) {
        console.error('Error redirecting to checkout:', error); // Log any error in the redirection process
        toast.error("Failed to initiate purchase.");
      }
    } catch (error) {
      console.error('Error in handlePurchase:', error); // Log any error in the handlePurchase function
      toast.error("Failed to initiate purchase.");
    }
  };
  //===> Remove Cart
  const removeCart = async (_id) => {
    try {
      const removeResponse = await axios.delete("http://localhost:3000/Remove-Cart/remove-cart?_id=669987436c4e05119c11e99a", {
        params: {
          _id: _id,
        }

      })
      if (removeResponse.data.response) {
        toast(removeResponse.data.response)
      }
      displayCarts();
      console.log(cartList, "after deleteing new list");
    } catch (error) {
      toast("operation denied", error);
    }
  };
  return (
    <main className="flex items-center m-[auto] flex-col mt-5 mb-3 w-[98%]">
      {cartList.length == 0 && <h1 className=" mt-[18%] mb-[18%] text-[25px] shadow-2xl shadow-black text-black">There is no product add to Cart !</h1>}
      {cartList.map((item, index) => (
        <Card
          key={index}
          url={item.car.url}
          make={item.car.make}
          model={item.car.model}
          year={item.car.year}
          body={item.car.body}
          color={item.car.color}
          fuel={item.car.fuel}
          price={item.car.price}
          handlePurchase={() => handlePurchase(item._id, item.car.price, item.car.make, item.car.model, `https://9547-2400-adc5-185-0-dccf-adb-4293-e9c9.ngrok-free.app/${item.car.url}`)}
          deleteCart={() => { removeCart(item._id) }}
        />
      ))}
    </main>
  );
}

function Card(props) {
  return (
    <div data-aos="fade-right" className="flex justify-center items-center text-white rounded-2xl mt-3 mb-3 bg-stone-800 w-[70%] h-[250px]">
      <div className="flex justify-between w-[95%]">
        <div className="flex w-[40%] h-[200px] bg-violet-800">
          <img src={`http://localhost:3000/${props.url}`} className="object-cover w-[100%] bg-orange-950 h-[200px]" alt={`${props.make} ${props.model}`} />
        </div>
        <div className="group w-[57%] h-[200px]">
          <p className="text-pretty">
            The car on display is a sleek {props.year} {props.make} {props.model}, a stunning {props.body} in a deep, metallic {props.color} color. This model boasts an efficient {props.fuel} fuel system, ensuring both power and economy.${props.price} competitively, the {props.model} offers exceptional value for those seeking a blend of style and performance.
          </p>
          <div className="hidden items-center justify-end w-[50%] h-[60px] bg-black relative left-60 bottom-1 bg-opacity-5 group-hover:flex">
            <button className="bg-black w-[100px] h-[50px] rounded-full border-none mr-[2%] p-[1%]" onClick={props.handlePurchase}>
              Purchase
            </button>
            <button className="bg-black w-[100px] h-[50px] rounded-full mr-[2%] p-[1%]" onClick={props.deleteCart}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
