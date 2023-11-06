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
      <Card title="Trade Action Update">
        <div className="flex justify-between">
          <div className="mt-10">
            <div className="">
              <div className="w-50">
                <div className="flex">
                  <div className="space-y-3">
                    <Textinput
                      label="Id*"
                      id="pn"
                      type="text"
                      placeholder="Id"
                    />
                  </div>
                  <div className="space-y-3">
                    <Textinput
                      label="User Id*"
                      id="pn"
                      type="text"
                      placeholder="User Id"
                    />
                  </div>
                </div>
              </div>
              <dev className="">
                <Button
                  text="Get Data"
                  className="btn-outline-dark btn-sm bg-success-500 text-lg border rounded border-success-500 text-white mt-3 text-center ml-44"
                />
              </dev>
            </div>

            <div className="flex mt-3">
              <div className="">
                <div className="grid flex-row">
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
                </div>
              </div>
              <div className="">
                <div>
                  <label htmlFor="default-picker" className=" form-label">
                    Joining Date
                  </label>
                  <Flatpickr
                    className="form-control py-2"
                    placeholder="YYYY-MM-DD"
                    value=""
                    id="default-picker"
                  />
                </div>
                <div>
                  <label htmlFor="default-picker" className=" form-label">
                   Expiry Date
                  </label>
                  <Flatpickr
                    className="form-control py-2"
                    placeholder="YYYY-MM-DD"
                    value=""
                    id="default-picker"
                  />
                </div>
                <Textinput
                    label="Payment Reference No"
                    id="pn"
                    type="text"
                    placeholder="Payment Reference No"
                  />
              </div>
            </div>
            <div className="flex mt-5">
              <Button
                text="Save"
                className="btn-outline-dark bg-success-500 text-lg border rounded border-success-500 text-white mr-3"
              />
              <Button
                text="Delete"
                className="btn-outline-dark bg-danger-500 text-lg border rounded border-danger-500 text-white mx-3"
              />
              <Button
                text="Get"
                className="btn-outline-dark bg-primary-500 text-lg border rounded border-primary-500 text-white mx-3"
              />
              <Button
                text="Update"
                className="btn-outline-dark bg-warning-500 text-lg border rounded border-warning-500 text-white mx-3"
              />
            </div>
          </div>
          <div className="ml-5">
            <ExampleOne />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default userPaymentManagement;
