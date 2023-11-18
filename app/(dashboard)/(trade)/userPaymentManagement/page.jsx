"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Flatpickr from "react-flatpickr";
import ExampleOne from "@/components/partials/table/ExampleOne";
import Button from "@/components/ui/Button";

const userPaymentManagement = () => {
  const [basic, setBasic] = useState(new Date());
  return (
    <div className="pt-5">
      <Card
        title="Trade Action Update"
        className="w-full max-w-screen-xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:items-end">
          <div className="flex-grow space-y-3 mt-10">
            <div className="flex space-x-4 items-end">
              <div className="w-full lg:w-1/2 space-y-3">
                <Textinput label="Id*" id="id" type="text" placeholder="Id" />
              </div>
              <div className="w-full lg:w-1/2 space-y-3">
                <Textinput
                  label="User Id*"
                  id="tradeId"
                  type="text"
                  placeholder="Trade Id"
                />
              </div>
              <Button
                text="Get Data"
                className="btn btn-success text-md px-3 py-2 rounded"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
              <Textinput
                label="Mobile No"
                id="pn"
                type="text"
                placeholder="Mobile No"
              />
              <Textinput
                label="Email"
                id="pn"
                type="text"
                placeholder="Email"
              />
              <Textinput
                label="Amount"
                id="pn"
                type="text"
                placeholder="Amount"
              />
              <Textinput
                label="Coupon Code"
                id="pn"
                type="text"
                placeholder="Coupon Code"
              />
              <div>
                <label htmlFor="joining-date" className="form-label">
                  Joining Date
                </label>
                <Flatpickr
                  className="form-control py-2"
                  placeholder="YYYY-MM-DD"
                  value=""
                  id="joining-date"
                />
              </div>
              <div>
                <label htmlFor="expiry-date" className="form-label">
                  Expiry Date
                </label>
                <Flatpickr
                  className="form-control py-2"
                  placeholder="YYYY-MM-DD"
                  value=""
                  id="expiry-date"
                />
              </div>
              <Textinput
                label="Payment Reference No"
                id="pn"
                type="text"
                placeholder="Payment Reference No"
              />
              <div className="flex space-x-3 justify-end mt-5 items-end">
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
            </div>

            
          </div>
        </div>
      </Card>

      <Card
        title="Advance Table"
        className="w-full max-w-screen-xl mx-auto mt-5"
      >
        <ExampleOne />
      </Card>
    </div>
  );
};

export default userPaymentManagement;
