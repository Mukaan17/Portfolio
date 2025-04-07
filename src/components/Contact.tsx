"use client";
import React, { useState } from "react";
import { Paragraph } from "./Paragraph";
import emailjs from '@emailjs/browser';

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

// Initialize EmailJS with your public key
emailjs.init("mftPN0qGQ2xOT3Ufx");

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    let isValid = true;
    const newFormData = { ...formData };

    if (!formData.name.value.trim()) {
      newFormData.name.error = "Name is required";
      isValid = false;
    }

    if (!formData.email.value.trim()) {
      newFormData.email.error = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.value)) {
      newFormData.email.error = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.value.trim()) {
      newFormData.message.error = "Message is required";
      isValid = false;
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_yhqzywr",
        "template_mkwgzen",
        {
          from_name: formData.name.value,
          from_email: formData.email.value,
          to_name: "Mukhil Sundararaj",
          to_email: "mukhilsundararaj.gowthaman@stern.nyu.edu",
          message: formData.message.value,
          reply_to: formData.email.value
        }
      );
      
      setSubmitStatus('success');
      setFormData(defaultFormState);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="form space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full px-4 py-2 rounded-md bg-gray-50 border ${
              formData.name.error ? 'border-red-500' : 'border-gray-200'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
            value={formData.name.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          {formData.name.error && (
            <p className="mt-1 text-sm text-red-500">{formData.name.error}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full px-4 py-2 rounded-md bg-gray-50 border ${
              formData.email.error ? 'border-red-500' : 'border-gray-200'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          {formData.email.error && (
            <p className="mt-1 text-sm text-red-500">{formData.email.error}</p>
          )}
        </div>
      </div>

      <div>
        <textarea
          placeholder="Your Message"
          rows={6}
          className={`w-full px-4 py-2 rounded-md bg-gray-50 border ${
            formData.message.error ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        {formData.message.error && (
          <p className="mt-1 text-sm text-red-500">{formData.message.error}</p>
        )}
      </div>

      <button
        className={`w-full px-6 py-3 rounded-md font-semibold text-white transition-colors ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <Paragraph className="text-green-600 text-center">
          Thank you for your message! I'll get back to you soon.
        </Paragraph>
      )}

      {submitStatus === 'error' && (
        <Paragraph className="text-red-600 text-center">
          Sorry, there was an error sending your message. Please try again.
        </Paragraph>
      )}
    </form>
  );
};
