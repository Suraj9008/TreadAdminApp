"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Flatpickr from "react-flatpickr";
import ExampleOne from "@/components/partials/table/ExampleOne";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

const UserManagement = () => {
  const [basic, setBasic] = useState(new Date());

  return (
    <div className="pt-5">
      {/* User Management Card */}
      <Card title="User Management" className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:items-end">
          <div className="flex-grow space-y-3">
            <div className="flex space-x-4 items-end">
              <div className="w-full lg:w-1/2 space-y-3">
                <Textinput label="Id*" id="id" type="text" placeholder="Id" />
              </div>
              <Button
                text="Get Data"
                className="btn btn-success text-md px-3 py-2 rounded"
              />
            </div>
            
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Textinput
                  label="Name"
                  id="pn"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="w-1/2">
                <Textinput
                  label="Mobile No"
                  id="pn"
                  type="text"
                  placeholder="Mobile No"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Textinput
                  label="Email"
                  id="pn"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="w-1/2">
                <Select options={["Pro", "Free"]} label="user Type" />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="form-label" id="timepicker1">
                  Joining Date
                </label>
                <Flatpickr
                  className="form-control py-2"
                  placeholder="YYYY-MM-DD"
                  value={basic}
                  id="default-picker"
                  onChange={(date) => setBasic(date)}
                />
              </div>
              <div className="w-1/2">
                <label className="form-label" id="timepicker2">
                  Expiry Date
                </label>
                <Flatpickr
                  className="form-control py-2"
                  placeholder="YYYY-MM-DD"
                  value={basic}
                  id="default-picker"
                  onChange={(date) => setBasic(date)}
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <Textinput
                  label="Device Id"
                  id="pn"
                  type="text"
                  placeh
                  older="Device Id"
                />
              </div>
              <div className="w-1/2">
                <Textinput
                  label="Firebase Token"
                  id="pn"
                  type="text"
                  placeh
                  older="Firebase Token"
                />
              </div>
            </div>
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

      <Card title="Table" className="w-full max-w-screen-xl mx-auto mt-3">
        <ExampleOne />
      </Card>
    </div>
  );
};

export default UserManagement;
