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
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    mobile: "",
    email: "",
    userType: "",
    joiningDate: new Date(),
    expiryDate: new Date(),
    deviceId: "",
    fireBase: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    console.log(formData);
  };

  const handleSave = () => {
    console.log(formData);
  };
  return (
    <div className="pt-5">
      {/* User Management Card */}
      <Card title="User Management" className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:items-end">
          <div className="flex-grow space-y-3">
            <div className="flex space-x-4 items-end">
              <div className="w-full lg:w-1/2 space-y-3">
                <Textinput
                  label="Id*"
                  id="id"
                  type="text"
                  placeholder="Id"
                  value={formData.id}
                  onChange={(e) => handleInputChange("id", e.target.value)}
                />
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
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Textinput
                  label="Mobile No"
                  id="pn"
                  type="text"
                  placeholder="Mobile No"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
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
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Select
                  options={["Pro", "Free"]}
                  label="user Type"
                  value={formData.userType}
                  onChange={(e) =>
                    handleInputChange("userType", e.target.value)
                  }
                />
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
                  id="default-picker"
                  value={formData.joiningDate}
                  onChange={(e) => handleInputChange("joiningDate", e)}
                />
              </div>
              <div className="w-1/2">
                <label className="form-label" id="timepicker2">
                  Expiry Date
                </label>
                <Flatpickr
                  className="form-control py-2"
                  placeholder="YYYY-MM-DD"
                  id="default-picker"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange("expiryDate", e)}
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
                  value={formData.deviceId}
                  onChange={(e) =>
                    handleInputChange("deviceId", e.target.value)
                  }
                />
              </div>
              <div className="w-1/2">
                <Textinput
                  label="Firebase Token"
                  id="pn"
                  type="text"
                  placeh
                  older="Firebase Token"
                  value={formData.fireBase}
                  onChange={(e) =>
                    handleInputChange("fireBase", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-5 justify-end">
          <Button
            text="Save"
            className="btn btn-success text-lg px-4 py-2 rounded mr-3"
            onClick={handleSave}
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
