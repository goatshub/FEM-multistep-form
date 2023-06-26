import { InputInfo } from "./Type";

export const stepInfo = [
  {
    stepNo: 1,
    stepTitle: "Your info",
    header: "Personal info",
    info: "Please provide your name, email address, and phone number.",
  },
  {
    stepNo: 2,
    stepTitle: "Select plan",
    header: "Select your plan",
    info: "You have the option of monthly or yearly billing.",
  },
  {
    stepNo: 3,
    stepTitle: "Add-ons",
    header: "Pick add-ons",
    info: "Add-ons help enhance your gaming experience.",
  },
  {
    stepNo: 4,
    stepTitle: "Summary",
    header: "Finishing up",
    info: "Double-check everything looks OK before confirming.",
  },
  {
    stepNo: 4,
    stepTitle: "Summary",
    header: "Thank you!",
    info: `Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.`,
  },
];

export const priceInfo = {
  yearly: {
    fullTerm: "Yearly",
    shortTerm: "yr",
    Arcade: 90,
    Advanced: 120,
    Pro: 150,
    onlineAddon: 10,
    storageAddon: 20,
    profileAddon: 20,
  },
  monthly: {
    fullTerm: "Monthly",
    shortTerm: "mo",
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
    onlineAddon: 1,
    storageAddon: 2,
    profileAddon: 2,
  },
};

export const inputInfo: InputInfo = {
  personal: [
    {
      name: "name",
      title: "Name",
      type: "text",
      placeholder: "e.g. Stephen King",
    },
    {
      name: "email",
      title: "Email Address",
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "tel",
      placeholder: "e.g. +1 234 567 890",
    },
  ],
  plan: [
    {
      name: "Arcade",
      title: "Arcade",
      specialOffer: "2 months free",
    },

    {
      name: "Advanced",
      title: "Advanced",
      specialOffer: "2 months free",
    },
    {
      name: "Pro",
      title: "Pro",
      specialOffer: "2 months free",
    },
  ],
  addOns: [
    {
      name: "onlineAddon",
      title: "Online service",
      info: "Access to multiplayer games",
    },
    {
      name: "storageAddon",
      title: "Larger storage",
      info: "Extra 1TB of cloud save",
    },
    {
      name: "profileAddon",
      title: "Customizable Profile",
      info: "Custom theme on your profile",
    },
  ],
};
