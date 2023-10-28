"use client";
import React from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Flatpickr from "react-flatpickr";
import ExampleOne from "@/components/partials/table/ExampleOne";
const AddTradePage = () => {
  return (
    <>
      <h1 className="text-center">Trade Data Page</h1>
      <div className="pt-5">
        <Card title="Basic Inputs">
          <div className="">
            <div className="space-y-3">
              <Textinput
                label="Project Name*"
                id="pn"
                type="text"
                placeholder="Management dashboard "
              />
            </div>
            <div className="space-y-3">
              <Textinput
                label="Project Name*"
                id="pn"
                type="text"
                placeholder="Management dashboard "
              />
            </div>
            <div className="space-y-3">
              <Select
                options={["Option 1", "Option 2", "Option 3"]}
                label="Select Option's"
              />
            </div>
            <div className="space-y-3">
              <Textinput
                label="Project Name*"
                id="pn"
                type="text"
                placeholder="Management dashboard "
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="default-picker" className=" form-label">
                Default Functionality
              </label>

              <Flatpickr
                className="form-control py-2"
                placeholder="YYYY-MM-DD"
                value=""
                id="default-picker"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="default-picker" className=" form-label">
                Default Functionality
              </label>

              <Flatpickr
                className="form-control py-2"
                value=""
                placeholder="YYYY-MM-DD"
                id="default-picker"
              />
            </div>
            <div className="space-y-3">
              <Select
                options={["Option 1", "Option 2", "Option 3"]}
                label="Select Option's"
              />
            </div>
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
