import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "Il tuo locale, sotto controllo.",
  quickLinks: [
    {
      text: "Funzionalità",
      url: "#features",
    },
    {
      text: "Prezzi",
      url: "#pricing",
    },
    {
      text: "Testimonials",
      url: "#testimonials",
    },
  ],
  email: "sales@marconisoftware.com",
  telephone: "+39 3292017775",
  socials: {
    twitter: "https://twitter.com/Twitter",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
};
