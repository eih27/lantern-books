# Lantern Books — E-Commerce Website

A simple online bookshop built with Claude Code (plain HTML, CSS and JavaScript).
All prices are in Indian rupees (₹).

## Features
1. **Home page** (`index.html`) with the store name and a welcome line.
2. **6 products**, each with a cover picture, name, author and price.
3. **"Add to Cart"** button on every product.
4. **Cart page** (`cart.html`) showing the selected books, quantities (+ / − / remove) and the total.
5. **Checkout page** (`checkout.html`) where the customer enters their name, phone number and address
   (the form checks that each one is filled in).
6. **"Pay Now" button** that opens the **Razorpay payment gateway** in test mode.
7. **Thank you page** (`success.html`) showing the payment ID, items, total paid and delivery details.

The cart is saved in the browser (localStorage), so it stays when you move between pages.

## One-time setup: Razorpay test key
1. Sign up free at https://dashboard.razorpay.com and make sure **Test Mode** is on (toggle at the top).
2. Go to **Account & Settings → API Keys → Generate Test Key**.
3. Copy the **Key ID** (starts with `rzp_test_`) and paste it into `js/config.js`.
   Do not put the Key Secret in this project.

## How to run
Open a terminal in this folder and run:

```bash
python3 -m http.server 5500
```

Then open http://localhost:5500 in your browser.

## Making a test payment
Add books to the cart → Checkout → fill in your details → **Pay Now**. In the Razorpay window, use one of:
- **UPI:** enter `success@razorpay` as the UPI ID.
- **Card:** a Razorpay test card from https://razorpay.com/docs/payments/payments/test-card-details/
  (any future expiry date, any CVV; on the OTP screen click **Success**).

No real money is charged in test mode.
