"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Flatpickr from "react-flatpickr";
import ExampleOne from "@/components/partials/table/ExampleOne";
import Button from "@/components/ui/Button";
import Fileinput from "@/components/ui/Fileinput";
import Select from "@/components/ui/Select";

const CouponCode = () => {
  const [basic, setBasic] = useState(new Date());
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    code: "",
    amount: "",
    validity: new Date(),
    note: "",
    status: "",
    image: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSave = () => {
    console.log("formData", formData);
  };

  return (
    <div className="pt-5">
      <Card
        title="Coupon Code Management"
        className="w-full max-w-screen-xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:items-end">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="mb-3">
              <Textinput
                label="Id*"
                id="id"
                type="text"
                placeholder="Id"
                value={formData.id}
                onChange={(e) => handleInputChange("id", e.target.value)}
              />
            </div>
            <div className="flex mb-3 items-end">
              <Button
                text="Get Data"
                className="btn btn-success text-md px-3 py-2 rounded"
              />
            </div>
            <Textinput
              label="Name"
              id="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <Textinput
              label="Code"
              id="code"
              type="text"
              placeholder="Code"
              value={formData.code}
              onChange={(e) => handleInputChange("code", e.target.value)}
            />
            <div className="">
              <label className="form-label" id="timepicker1">
                Validity
              </label>
              <Flatpickr
                className="form-control py-2"
                placeholder="YYYY-MM-DD"
                value={formData.date}
                id="default-picker"
                onChange={(dateStr) => handleInputChange("date", dateStr)}
              />
            </div>
            <Textinput
              label="Note"
              id="note"
              type="text"
              placeholder="Note"
              value={formData.note}
              onChange={(e) => handleInputChange("id", e.target.value)}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-3">
              <label className="form-label">Upload Image</label>
              <Fileinput
                name="basic"
                selectedFile=""
                value={formData.image}
                onChange={(e) => handleInputChange("image", e.target.value)}
              />
            </div>
            <Textinput
              label="Amount"
              id="amount"
              type="text"
              placeholder="Amount"
              value={formData.amount}
              onChange={(e) => handleInputChange("amount", e.target.value)}
            />
            <div className="mt-3">
              <Select
                options={["On", "Off"]}
                label="Status"
                value={formData.status}
                onChange={(e) => handleInputChange("status", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-3 justify-end mt-5 ">
          <Button
            text="Save"
            className="btn btn-success text-md px-3 py-2 rounded"
            onClick={handleSave}
          />
          <Button
            text="Delete"
            className="btn btn-danger text-md px-3 py-2 rounded"
          />
          <Button
            text="Get"
            className="btn btn-primary text-md px-3 py-2 rounded"
          />
          <Button
            text="Update"
            className="btn btn-warning text-md px-3 py-2 rounded"
          />
        </div>
      </Card>
      <Card
        title="Advance Table"
        className="w-full max-w-screen-xl mx-auto mt-3"
      >
        <ExampleOne />
      </Card>
    </div>
  );
};

export default CouponCode;
