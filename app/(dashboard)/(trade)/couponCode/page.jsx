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

  return (
    <div className="pt-5">
      <Card
        title="Coupon Code Management"
        className="w-full max-w-screen-xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:items-end">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="mb-3">
              <Textinput label="Id*" id="id" type="text" placeholder="Id" />
            </div>
            <div className="flex mb-3 items-end">
              <Button
                text="Get Data"
                className="btn btn-success text-md px-3 py-2 rounded"
              />
            </div>
            <Textinput label="Name" id="name" type="text" placeholder="Name" />
            <Textinput label="Code" id="code" type="text" placeholder="Code" />
            <Textinput
              label="Validity"
              id="validity"
              type="text"
              placeholder="Validity"
            />
            <Textinput label="Note" id="note" type="text" placeholder="Note" />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-3">
              <label className="form-label">Upload Image</label>
              <Fileinput name="basic" selectedFile="" />
            </div>
            <Textinput
              label="Amount"
              id="amount"
              type="text"
              placeholder="Amount"
            />
            <div className="mt-3">
              <Select options={["On", "Off"]} label="Status" />
            </div>
          </div>
        </div>

        <div className="flex space-x-3 justify-end mt-5 ">
          <Button
            text="Save"
            className="btn btn-success text-md px-3 py-2 rounded"
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
      <Card title="Advance Table" className="w-full max-w-screen-xl mx-auto mt-3">
        <ExampleOne />
      </Card>
    </div>
  );
};

export default CouponCode;
