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
    <div className="container mx-auto mt-10">
      <Card title="Trade Data Page" className="w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Row */}
          <div className="mb-4">
            <Textinput
              label="Trade Id*"
              id="tradeId"
              type="text"
              placeholder="Management dashboard"
            />
          </div>
          <div className="mb-4">
            <Textinput
              label="Note*"
              id="note"
              type="text"
              placeholder="Management dashboard"
            />
          </div>
          <div className="mb-4">
            <Select
              options={["Option 1", "Option 2", "Option 3"]}
              label="User Type"
            />
          </div>

          {/* Second Row */}
          <div className="mb-4">
            <Textinput
              label="Company Name*"
              id="companyName"
              type="text"
              placeholder="Management dashboard"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="default-picker" className="form-label">
              Date
            </label>
            <Flatpickr
              className="form-control py-2"
              placeholder="YYYY-MM-DD"
              value={basic}
              id="default-picker"
              onChange={(date) => setBasic(date)}
            />
          </div>
          <div className="mb-4">
            <Select
              options={["Option 1", "Option 2", "Option 3"]}
              label="Status"
            />
          </div>

          {/* Third Row */}
          <div className="mb-4">
            <Textinput
              label="Buy Price"
              id="buyPrice"
              type="text"
              placeholder="Management dashboard"
            />
          </div>
          <div className="mb-4">
            <Textinput
              label="SL Price"
              id="slPrice"
              type="text"
              placeholder="Management dashboard"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Upload Image</label>
            <Fileinput name="basic" selectedFile="" />
          </div>

          {/* Fourth Row */}
          <div className="mb-4">
            <Textinput
              label="TGT Price"
              id="tgtPrice"
              type="text"
              placeholder="Management dashboard"
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
            <Textinput
              label="Result Text View"
              id="resultTextView"
              type="text"
              placeholder="Management dashboard"
            />
          </div>
        </div>

        <div className="flex mt-5 justify-end">
          <Button
            text="Save"
            className="btn btn-success text-lg px-4 py-2 rounded mr-3"
          />
          <Button
            text="Delete"
            className="btn btn-danger text-lg px-4 py-2 rounded mr-3"
          />
          <Button
            text="Get"
            className="btn btn-primary text-lg px-4 py-2 rounded mr-3"
          />
          <Button
            text="Update"
            className="btn btn-warning text-lg px-4 py-2 rounded"
          />
        </div>
      </Card>

      {/* Additional Section */}
      <Card className="w-full max-w-screen-xl mx-auto mt-5">
        <ExampleOne />
      </Card>
    </div>
  );
};

export default AddTradePage;
