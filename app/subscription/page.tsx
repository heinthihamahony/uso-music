"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
} from "@nextui-org/react";
import NavbarComponent from "../compounent/ui/tableleft";
import { useTheme } from "../context/theme-context";

export default function SubscriptionPage() {
  const { isLightMode } = useTheme();

  const subscriptionPlans = [
    {
      id: 1,
      name: "3 Months Plan",
      duration: "3 months",
      price: "$9.99",
      originalPrice: "$14.97",
      savings: "Save 33%",
      features: [
        "Unlimited music streaming",
        "Ad-free experience",
        "High quality audio",
        "Offline downloads",
        "Priority customer support",
      ],
      popular: false,
      color: "default",
    },
    {
      id: 2,
      name: "6 Months Plan",
      duration: "6 months",
      price: "$17.99",
      originalPrice: "$29.94",
      savings: "Save 40%",
      features: [
        "Unlimited music streaming",
        "Ad-free experience",
        "High quality audio",
        "Offline downloads",
        "Priority customer support",
        "Exclusive content access",
        "Early access to new releases",
      ],
      popular: true,
      color: "primary",
    },
    {
      id: 3,
      name: "1 Year Plan",
      duration: "1 year",
      price: "$29.99",
      originalPrice: "$59.88",
      savings: "Save 50%",
      features: [
        "Unlimited music streaming",
        "Ad-free experience",
        "High quality audio",
        "Offline downloads",
        "Priority customer support",
        "Exclusive content access",
        "Early access to new releases",
        "Premium playlists",
        "Artist meet & greet opportunities",
      ],
      popular: false,
      color: "secondary",
    },
  ];

  const handleSubscribe = (planId: number, planName: string) => {
    // Handle subscription logic here
    console.log(`Subscribing to ${planName} (ID: ${planId})`);
    // You can add payment processing logic here
  };

  return (
    <div className="min-h-screen theme-bg-primary">
      <div className="px-4 py-3">
        <NavbarComponent />

        {/* Header */}
        <div className="text-center mt-8 mb-12">
          <h1 className="text-4xl font-bold theme-text-primary mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg theme-text-secondary">
            Unlock unlimited music streaming with our premium plans
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative theme-bg-secondary theme-border transition-all duration-300 hover:shadow-xl ${
                  isLightMode
                    ? "hover:shadow-gray-500/20"
                    : "hover:shadow-gray-300/20"
                } ${
                  plan.popular
                    ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20"
                    : ""
                }`}
                isPressable
                isHoverable
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <div className="w-full">
                    <h3 className="text-2xl font-bold theme-text-primary mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold theme-text-primary">
                        {plan.price}
                      </span>
                      <span className="text-sm theme-text-secondary line-through">
                        {plan.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-green-500">
                      {plan.savings}
                    </p>
                    <p className="text-sm theme-text-secondary mt-1">
                      Billed {plan.duration}
                    </p>
                  </div>
                </CardHeader>

                <Divider className="theme-border" />

                <CardBody className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="theme-text-primary text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>

                <CardFooter className="pt-6">
                  <Button
                    className={`w-full font-semibold ${
                      plan.popular
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : `${
                            isLightMode
                              ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                              : "bg-gray-700 hover:bg-gray-600 text-white"
                          }`
                    }`}
                    size="lg"
                    onClick={() => handleSubscribe(plan.id, plan.name)}
                  >
                    Subscribe Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="theme-bg-secondary rounded-lg p-8 theme-border shadow-lg">
            <h2 className="text-2xl font-bold theme-text-primary mb-4">
              Why Choose Our Premium Plans?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold theme-text-primary mb-2">
                  Unlimited Access
                </h3>
                <p className="theme-text-secondary text-sm">
                  Stream millions of songs without any limits
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold theme-text-primary mb-2">
                  Ad-Free Experience
                </h3>
                <p className="theme-text-secondary text-sm">
                  Enjoy uninterrupted music without any advertisements
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold theme-text-primary mb-2">
                  Premium Features
                </h3>
                <p className="theme-text-secondary text-sm">
                  Access exclusive content and premium features
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 mb-8">
          <p className="theme-text-secondary text-sm">
            All plans include a 7-day free trial. Cancel anytime.
          </p>
          <p className="theme-text-secondary text-xs mt-2">
            Terms and conditions apply. Prices may vary by region.
          </p>
        </div>
      </div>
    </div>
  );
}
