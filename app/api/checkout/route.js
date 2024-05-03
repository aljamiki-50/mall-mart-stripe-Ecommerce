import { NextResponse, NextRequest } from "next/server";
import session from "redux-persist/lib/storage/session";
// import stripe from "stripe";
import stripe from "stripe";

export const POST = async (request) => {
  const origin = request.headers.get("origin");

  // console.log("the origin is ", origin);

  // console.log(origin)

  // console.log("her the req",request);

  const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY); // Initialize Stripe with your secret key

  try {
    const reqBody = await request.json();
    const { items, email } = reqBody;
    // console.log(items);
    // console.log("you email is   ", email)
    const extractingData = items.map((item) => ({
      quantity: item?.quantity,
      price_data: {
        currency: "usd",
        product_data: {
          name: item?.title,
          description: item?.description,
          images: [item?.image],
        },
        unit_amount: item?.price * 100,
      },
    }));

    // console.log(extractingData[0][product_data])
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingData,
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/Error`,
      metadata: {
        email,
      },
    });

    return NextResponse.json({
      message: "Connection is Secure and Active",
      success: true, // Changed to boolean value
      id: session?.id,
    });
    // console.log("here the req",reqBody);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
