"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import React, { useState } from "react";

interface Agent {
  name: string;
  email: string;
  mobile: string;
  password: string;
}

interface AgentFormProps {
  onSubmit: (agent: Agent) => void;
  onClose: () => void;
}

const AgentForm: React.FC<AgentFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState<Agent>({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };
  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, mobile: "+" + value });
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Add Agent</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <PhoneInput
            country={"in"} // default to India
            value={formData.mobile}
            onChange={handlePhoneChange}
            inputClass="!w-full !border !rounded !py-2"
            containerClass="w-full"
            enableSearch={true} // allows searching countries
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgentForm;
