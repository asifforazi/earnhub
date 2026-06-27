"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Is EarnHub free to use?",
    answer:
      "Yes. Creating an account and using EarnHub is completely free.",
  },
  {
    question: "How do I earn money?",
    answer:
      "You can earn by completing surveys, offerwalls, s and inviting friends.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "Most withdrawals are processed within 24-48 hours after approval.",
  },
  {
    question: "Can I use multiple accounts?",
    answer:
      "No. Multiple accounts are strictly prohibited and may result in permanent suspension.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-400">
            Find answers to the most common questions.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-950"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white">
                  {item.question}
                </span>

                <FaChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t border-slate-800 px-6 py-5 text-slate-400">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}