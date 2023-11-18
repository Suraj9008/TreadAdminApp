"use client";
import React, { useEffect, useState } from "react";
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
    tradeId: "",
    holdingDays: "",
    buyPrice: "",
    sellPrice: "",
    note: "",
    return: "",
    date: Date,
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSave = () => {
    console.log("formData", formData);
  };

  const handleDelete = () => {
    // Implement the logic to delete the data
  };

  const handleGet = () => {
    // Implement the logic to get data
  };

  const handleUpdate = () => {
    // Implement the logic to update data
  };

  return (
    <div className="pt-5">
      <Card title="Trade Closure" className="w-full max-w-screen-xl mx-auto">
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
              <div className="w-full lg:w-1/2 space-y-3">
                <Textinput
                  label="Trade Id*"
                  id="tradeId"
                  type="text"
                  placeholder="Trade Id"
                  onChange={(e) => handleInputChange("tradeId", e.target.value)}
                  value={formData.tradeId}
                />
              </div>
              <Button
                text="Get"
                className="btn btn-success text-md px-3 py-2 rounded "
                onClick={handleGet}
              />
            </div>
            <div className="flex space-x-4 items-end">
              <div className="lg:w-1/2">
                <label className="form-label" id="timepicker1">
                  Date
                </label>
                <Flatpickr
                  className="form-control py-2"
                  placeholder="YYYY-MM-DD"
                  value={formData.date}
                  id="default-picker"
                  onChange={(dateStr) => handleInputChange("date", dateStr)}
                />
              </div>
              <div className="lg:w-1/2">
                <Textinput
                  label="Holding Days"
                  id="pn"
                  type="text"
                  placeholder="Holding Days"
                  onChange={(e) =>
                    handleInputChange("holdingDays", e.target.value)
                  }
                  value={formData.holdingDays}
                />
              </div>
            </div>
            <div className="flex space-x-4 items-end">
              <div className="lg:w-1/2">
                <Textinput
                  label="Buy Price"
                  id="pn"
                  type="text"
                  placeholder="Buy Price"
                  onChange={(e) =>
                    handleInputChange("buyPrice", e.target.value)
                  }
                  value={formData.buyPrice}
                />
              </div>
              <div className="lg:w-1/2">
                <Textinput
                  label="Sell Price"
                  id="deviceId"
                  type="text"
                  placeholder="Sell Price"
                  onChange={(e) =>
                    handleInputChange("sellPrice", e.target.value)
                  }
                  value={formData.sellPrice}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="lg:w-1/2">
                <Textinput
                  label="Note"
                  id="deviceId"
                  type="text"
                  placeholder="Note"
                  onChange={(e) => handleInputChange("note", e.target.value)}
                  value={formData.note}
                />
              </div>
              <div className="lg:w-1/2">
                <Textinput
                  label="Return"
                  id="deviceId"
                  type="text"
                  placeholder="Return"
                  onChange={(e) => handleInputChange("return", e.target.value)}
                  value={formData.return}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-3 justify-end mt-5">
          <Button
            text="Save"
            className="btn btn-success text-md px-3 py-2 rounded"
            onClick={handleSave}
          />
          <Button
            text="Delete"
            className="btn btn-danger text-md px-3 py-2 rounded"
            onClick={handleDelete}
          />
          <Button
            text="Update"
            className="btn btn-warning text-md px-3 py-2 rounded"
            onClick={handleUpdate}
          />
        </div>
      </Card>

      <Card
        title="Advance Table"
        className="w-full max-w-screen-xl mx-auto mt-3"
      >
        <div className="ml-5">
          <ExampleOne />
        </div>
      </Card>
    </div>
  );
};

export default UserManagement;
