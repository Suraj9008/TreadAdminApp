"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Flatpickr from "react-flatpickr";
import ExampleOne from "@/components/partials/table/ExampleOne";
import Button from "@/components/ui/Button";

const AddTradeActionPage = () => {
  const [basic, setBasic] = useState(new Date());

  return (
    <div className="pt-5">
      <Card
        title="Trade Action Update"
        className="w-full max-w-screen-xl mx-auto mt-3"
      >
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:items-end">
          <div className="flex-grow space-y-3">
            <div className="flex space-x-4 items-end">
              <div className="w-full lg:w-1/2 space-y-3">
                <Textinput label="Id*" id="id" type="text" placeholder="Id" />
              </div>
              <div className="w-full lg:w-1/2 space-y-3">
                <Textinput
                  label="Trade Id*"
                  id="tradeId"
                  type="text"
                  placeholder="Trade Id"
                />
              </div>
              <Button
                text="Get"
                className="btn btn-success text-md px-3 py-2 rounded "
              />
            </div>
            <div className="flex-grow space-y-3">
              <div className="flex space-x-4">
                <div className="w-full lg:w-1/2">
                  <label htmlFor="default-picker" className="form-label">
                    Date
                  </label>
                  <Flatpickr
                    className="form-control py-2"
                    placeholder="YYYY-MM-DD"
                    value=""
                    id="default-picker"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="form-label" id="timepicker">
                    Time
                  </label>
                  <Flatpickr
                    className="form-control py-2"
                    value={basic}
                    id="timepicker"
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "H:i",
                      time_24hr: true,
                    }}
                    onChange={(date) => setBasic(date)}
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="grid grid-cols-3 gap-4 w-full">
                <Textinput
                  label="Current Price"
                  id="currentPrice"
                  type="text"
                  placeholder="Current Price"
                />
                <Textinput
                  label="SL Price"
                  id="slPrice"
                  type="text"
                  placeholder="SL Price"
                />
                <Textinput
                  label="TGT Price"
                  id="tgtPrice"
                  type="text"
                  placeholder="TGT Price"
                />
              </div>
              <div className="ml-4 w-full lg:w-1/2">
                <Textinput
                  label="Action"
                  id="action"
                  type="text"
                  placeholder="Action"
                />
              </div>
            </div>
            <div className="flex mt-5 space-x-3 justify-end">
              <Button
                text="Save"
                className="btn btn-success text-lg px-4 py-2 rounded"
              />
              <Button
                text="Delete"
                className="btn btn-danger text-lg px-4 py-2 rounded"
              />
              <Button
                text="Get"
                className="btn btn-primary text-lg px-4 py-2 rounded"
              />
              <Button
                text="Update"
                className="btn btn-warning text-lg px-4 py-2 rounded"
              />
            </div>
          </div>
        </div>
      </Card>
      <Card className="w-full max-w-screen-xl mx-auto mt-3">
        <div className="ml-5">
          <ExampleOne />
        </div>
      </Card>
    </div>
  );
};

export default AddTradeActionPage;
