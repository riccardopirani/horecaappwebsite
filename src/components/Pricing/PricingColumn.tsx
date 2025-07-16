"use client";
import { useState } from "react";

import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
  tier: IPricing;
  highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, price, features } = tier;

  const [showModal, setShowModal] = useState(false);
  type FormFields = {
    nome: string;
    cognome: string;
    email: string;
    telefono: string;
    locale: string;
  };

  const [formData, setFormData] = useState<FormFields>({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    locale: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:sales@marconisoftware.com?subject=Richiesta attivazione - ${name}&body=Richiesta attivazione piano: ${name}%0D%0A%0D%0ANome: ${formData.nome}%0ACognome: ${formData.cognome}%0AEmail: ${formData.email}%0ATelefono: ${formData.telefono}%0ALocale: ${formData.locale}`;
    window.location.href = mailtoLink;
    setShowModal(false);
  };

  return (
    <>
      <div
        className={clsx(
          "w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full",
          {
            "shadow-lg": highlight,
          },
        )}
      >
        <div className="p-6 border-b border-gray-200 rounded-t-xl">
          <h3 className="text-2xl font-semibold mb-4">{name}</h3>
          <p className="text-3xl md:text-5xl font-bold mb-6">
            <span className={clsx({ "text-secondary": highlight })}>
              {typeof price === "number" ? `$${price}` : price}
            </span>
            {typeof price === "number" && (
              <span className="text-lg font-normal text-gray-600">/mo</span>
            )}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className={clsx("w-full py-3 px-4 rounded-full transition-colors", {
              "bg-primary hover:bg-primary-accent text-white": highlight,
              "bg-hero-background hover:bg-gray-200": !highlight,
            })}
          >
            Richiedi attivazione
          </button>
        </div>
        <div className="p-6 mt-1">
          <p className="font-bold mb-0">FEATURES</p>
          <p className="text-foreground-accent mb-5">
            Everything in basic, plus...
          </p>
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                <span className="text-foreground-accent">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Richiesta attivazione
            </h2>
            <div className="grid gap-4">
            {(Object.keys(formData) as (keyof FormFields)[]).map((field) => (
  <input
    key={field}
    name={field}
    placeholder={field[0].toUpperCase() + field.slice(1)}
    value={formData[field]}
    onChange={handleInputChange}
    className="border border-gray-300 rounded-md px-3 py-2 w-full"
    type={field === "email" ? "email" : "text"}
  />
))}
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                Annulla
              </button>
              <button
                onClick={handleSubmit}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-accent"
              >
                Invia richiesta
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingColumn;
