"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Flatpickr from "react-flatpickr";
import ExampleOne from "@/components/partials/table/ExampleOne";
import Button from "@/components/ui/Button";

const userManagement = () => {
  const [basic, setBasic] = useState(new Date());
  return (
    <div className="pt-5">
      <Card title="Trade Closure">
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
                      label="Trade Id*"
                      id="pn"
                      type="text"
                      placeholder="Trade Id"
                    />
                  </div>
                </div>
              </div>
              <dev className="">
                <Button
                  text="Get Data"
                  className="btn-outline-dark btn-sm bg-success-500 text-lg border rounded border-success-500 text-white mt-3 text-center "
                />
              </dev>
            </div>
            <div className="flex mt-3">
              <div>
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
            <div className="flex mt-3">
              <div className="">
                <div className="grid flex-row">
                  <Textinput
                    label="Current Price"
                    id="pn"
                    type="text"
                    placeholder="Current Price"
                  />
                  <Textinput
                    label="SL Price"
                    id="pn"
                    type="text"
                    placeholder="SL Price"
                  />
                  <Textinput
                    label="TGT Price"
                    id="pn"
                    type="text"
                    placeholder="TGT Price"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Textinput
                  label="Holding Days"
                  id="pn"
                  type="text"
                  placeholder="Holding Days"
                />
                <Textinput
                  label="Note"
                  id="pn"
                  type="text"
                  placeholder="Note"
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

export default userManagement;
