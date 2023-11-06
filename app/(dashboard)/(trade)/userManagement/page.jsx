"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Flatpickr from "react-flatpickr";
import ExampleOne from "@/components/partials/table/ExampleOne";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

const userManagement = () => {
  const [basic, setBasic] = useState(new Date());
  return (
    <div className="pt-5">
      <Card title="User Management">
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
                  <div className="flex items-end">
                    <Button
                      text="Get Data"
                      className="btn-outline-dark btn-sm bg-success-500 text-lg border rounded border-success-500 mb-0.5 text-white text-center "
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex mt-3">
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
            </div> */}
            <div className="flex mt-3">
              <div className="">
                <div className="grid flex-row">
                  <Textinput
                    label="Name"
                    id="pn"
                    type="text"
                    placeholder="Name"
                  />
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
                  <div className="">
                    <Select options={["Pro", "Free"]} label="Status" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
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
                <Textinput
                  label="Device Id"
                  id="pn"
                  type="text"
                  placeholder="Device Id"
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
