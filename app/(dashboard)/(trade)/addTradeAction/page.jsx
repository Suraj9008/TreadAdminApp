"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Flatpickr from "react-flatpickr";
import ExampleOne from "@/components/partials/table/ExampleOne";
import Button from "@/components/ui/Button";
import TradeActionTable from "../TradeActionTable";

const AddTradeActionPage = () => {
  const [stockData, setStockData] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [formData, setFormData] = useState({
    id: "",
    tradeId: "",
    date: new Date(),
    time: "",
    currentPrice: "",
    slPrice: "",
    tgtPrice: "",
    action: "",
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

  async function getStockData() {
    const apiUrl = baseUrl + "/webdata/getactivetrades.php";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setStockData(data);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw new Error("Failed to fetch stock data");
    }
  }

  useEffect(() => {
    getStockData();
  }, [stockData.length]);

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
                <Textinput
                  label="Id*"
                  id="id"
                  type="text"
                  placeholder="Id"
                  value={formData.id}
                  onChange={(e) => {
                    handleInputChange("id", e.target.value);
                  }}
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-3">
                <Textinput
                  label="Trade Id*"
                  id="tradeId"
                  type="text"
                  placeholder="Trade Id"
                  value={formData.tradeId}
                  onChange={(e) => {
                    handleInputChange("tradeId", e.target.value);
                  }}
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
                    id="default-picker"
                    value={formData.date}
                    onChange={(e) => {
                      handleInputChange("date", e);
                    }}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="form-label" id="timepicker">
                    Time
                  </label>
                  <Flatpickr
                    className="form-control py-2"
                    id="timepicker"
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "H:i",
                      time_24hr: true,
                    }}
                    value={formData.time}
                    onChange={(e) => {
                      handleInputChange("time", e);
                    }}
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
                  value={formData.currentPrice}
                  onChange={(e) => {
                    handleInputChange("currentPrice", e.target.value);
                  }}
                />
                <Textinput
                  label="SL Price"
                  id="slPrice"
                  type="text"
                  placeholder="SL Price"
                  value={formData.slPrice}
                  onChange={(e) => {
                    handleInputChange("slPrice", e.target.value);
                  }}
                />
                <Textinput
                  label="TGT Price"
                  id="tgtPrice"
                  type="text"
                  placeholder="TGT Price"
                  value={formData.tgtPrice}
                  onChange={(e) => {
                    handleInputChange("tgtPrice", e.target.value);
                  }}
                />
              </div>
              <div className="ml-4 w-full lg:w-1/2">
                <Textinput
                  label="Action"
                  id="action"
                  type="text"
                  placeholder="Action"
                  value={formData.action}
                  onChange={(e) => {
                    handleInputChange("action", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex mt-5 space-x-3 justify-end">
              <Button
                text="Save"
                className="btn btn-success text-lg px-4 py-2 rounded"
                onClick={handleSave}
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
      <Card className="w-full  mx-auto mt-3">
        <div className="ml-5 mt-3">
          <TradeActionTable title="Stock Data Table" stockData={stockData} />
        </div>
      </Card>
    </div>
  );
};

export default AddTradeActionPage;
