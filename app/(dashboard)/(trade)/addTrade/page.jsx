"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Select from "@/components/ui/Select";
import Flatpickr from "react-flatpickr";
import ExampleOne from "@/components/partials/table/ExampleOne";
import Fileinput from "@/components/ui/Fileinput";
import Button from "@/components/ui/Button";

const AddTradePage = () => {
  const [basic, setBasic] = useState(new Date());
  return (
    <>
      <div className="pt-5">
        <Card title="Trade Data Page">
          <div className="">
            <div className="space-y-3">
              <Textinput
                label="Trade Id*"
                id="pn"
                type="text"
                placeholder="Management dashboard "
              />
            </div>
            <div className="space-y-3">
              <Textinput
                label="Note*"
                id="pn"
                type="text"
                placeholder="Management dashboard "
              />
            </div>
            <div className="space-y-3">
              <Select
                options={["Option 1", "Option 2", "Option 3"]}
                label="User Type"
              />
            </div>
            <div className="space-y-3">
              <Textinput
                label="Company Name*"
                id="pn"
                type="text"
                placeholder="Management dashboard "
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="default-picker" className=" form-label">
                Date
              </label>
              <Flatpickr
                className="form-control py-2"
                placeholder="YYYY-MM-DD"
                value=""
                id="default-picker"
              />
            </div>
            <div className="space-y-3">
              <Select
                options={["Option 1", "Option 2", "Option 3"]}
                label="Status"
              />
            </div>
            <div className="space-y-3">
              <label className=" form-label">Upload Image</label>
              <Fileinput name="basic" selectedFile="" />
            </div>
            <div className="space-y-3">
              <Textinput
                label="Buy Price"
                id="pn"
                type="text"
                placeholder="Management dashboard "
              />
            </div>
            <div className="space-y-3">
              <Textinput
                label="SL Price"
                id="pn"
                type="text"
                placeholder="Management dashboard "
              />
            </div>
            <div className="space-y-3">
              <Textinput
                label="TGT Price"
                id="pn"
                type="text"
                placeholder="Management dashboard "
              />
            </div>
            <div>
              <label className="form-label" id="timepicker">
                Basic 24hrs
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
            <div className="space-y-3">
              <Textinput
                label="Result Text View"
                id="pn"
                type="text"
                placeholder="Management dashboard "
              />
            </div>
          </div>
          <div className="columns-3 mt-5">
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
        </Card>
      </div>
      <div className="mt-5">
        <ExampleOne />
      </div>
    </>
  );
};

export default AddTradePage;
