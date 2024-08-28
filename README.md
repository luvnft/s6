


https://github.com/user-attachments/assets/0d808ca7-e73e-4036-8896-8d42cc36fda9





# SolanaPay Demo Project

yay! This project was created as part a submission under the **Solana Summer Fellowship by [SuperTeam](https://superteam.fun)**, showcasing the integration of SolanaPay with a simple e-commerce interface. The demo allows users to generate payment links and QR codes for purchasing products using SOL, providing a foundational understanding of how to incorporate solana crypto payments into a web application.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Note to Developers](#note-to-developers)
- [Resources](#resources)
- [License](#license)

## Introduction
This project is a demo application built as part of the Solana Fellowship to demonstrate how SolanaPay can be used to facilitate Point of Sales payments and I decided to demonstrate that using e-commerce approach. 😇 The application lists a few dummy products and allows users to generate payment links and QR codes for making payments in SOL.

## Features
- List of dummy products with SOL prices.
- Ability to generate payment links using SolanaPay.
- QR code generation for easy payments.
- Payment Verification and Validations
- Transaction Success Page
- Cart
- Simple, easy-to-understand codebase ideal for learning and experimenting with SolanaPay.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/eimaam/s6-solana-pay.git
   ```
2. Navigate to the project directory:
   ```bash
   cd s6-solana-pay
   ```
3. Install the dependencies: (I am using npm, use your package manager's command)
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000` to see the demo in action.

## Usage
Once the project is running, you can:
- View the list of products available for purchase.
- Add products/items to Cart
- View Cart
- Checkout > Generate Pay Link
- Scan the generated QR code to make a payment using SolanaPay.

## Tech Stack
- TypeScript
- React (Vite)
- Vercel (Deployment)
- Tailwind CSS
- Ant Design (UI)


## Note to Developers
Thought I should share this...  🙂
**Important:** This project is a demo, and **in real development, reference, products and their pricing should be handled on the server side**. Managing product data and prices on the client side, as done in this demo, is not secure and can obviously be easily manipulated by users. Always ensure sensitive information, such as product pricing and the reference, is securely managed on the server to prevent unauthorized modifications and ensure the integrity of transactions.

## Resources
Some go-to resources for SolanaPay and building with Solana:

- [SolanaPay Documentation](https://docs.solanapay.com/)
- [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/)
- [BigNumber.js Documentation](https://mikemcl.github.io/bignumber.js/)

Feel free to add any additional resources you found helpful, create an issue or PR if you find a bug in the project or have some suggestions. ✌️✌️

## License
This project is licensed under the MIT License. 
