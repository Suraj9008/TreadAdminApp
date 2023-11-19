"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Select from "@/components/ui/Select";
import Flatpickr from "react-flatpickr";
import Fileinput from "@/components/ui/Fileinput";
import Button from "@/components/ui/Button";
import TradeActionTable from "../TradeActionTable";

const AddTradePage = () => {
  const [stockData, setStockData] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [formData, setFormData] = useState({
    tradeId: "1",
    note: "hiiii",
    userType: "",
    company: "",
    date: "",
    status: "",
    buyPrice: "",
    slPrice: "",
    image: "",
    tgtPrice: "",
    time: "",
    result: "",
  });

  const handleInputChange = (field, value) => {
    console.log(`Updating ${field} with value:`, value);
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSave = () => {
    console.log("formData", formData);
  };

  async function getAllTrades() {
    const apiUrl = baseUrl + "/webdata/getalltrades.php";

    try {
      const formDataInstance = new FormData();
      formDataInstance.append("id", "NA");
      formDataInstance.append("all", "true");

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formDataInstance,
      });

      const data = await response.json();
      setStockData(data);
      return data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw new Error("Failed to fetch stock data");
    }
  }

  async function getSingleTrades() {
    const apiUrl = baseUrl + "/webdata/getalltrades.php";
    try {
      const form = new FormData();
      form.append("id", formData.tradeId.toString());
      form.append("all", "NA");

      const response = await fetch(apiUrl, {
        method: "POST",
        body: form,
      });

      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw new Error("Failed to fetch stock data");
    }
  }
  console.log("formData", formData.note);
  const handleGetTrades = async () => {
    try {
      const data = await getSingleTrades();
      if (data) {
        console.log(data); // Log the returned data
        setFormData((prevData) => ({
          ...prevData,
          tradeId: data.id,
          note: data.note,
          company: data.comp_name,
          date: data.date,
          slPrice: data.sl_price,
          tgtPrice: data.target_price,
          status: data.status,
          buyPrice: data.buy_price,
          image: data.comp_logo_url,
          result: data.result,
          time: data.time,
          userType: data.usr_type,
        }));
      }
    } catch (error) {
      console.error("Error getting trades:", error);
    }
  };

  useEffect(() => {
    getAllTrades();
  }, [stockData.length, formData.id, formData.company]);

  useEffect(() => {
    console.log("Component re-rendered with updated formData:", formData);
  }, [
    formData.id,
    formData.company,
    formData.buyPrice,
    formData.date,
    formData.image,
    formData.note,
    formData.tgtPrice,
    formData.slPrice,
    formData.time,
  ]);

  return (
    <div className="container mx-auto mt-10">
      <Card title="Trade Data Page" className="w-full max-w-screen-xl mx-auto">
        {formData.image != null && (
          <div className="flex justify-end">
            <img
              className="text-left"
              src={formData.image}
              width="50"
              alt=""
              srcset=""
            />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Row */}
          <div className="mb-4">
            <Textinput
              label="Trade Id*"
              id="tradeId"
              type="text"
              placeholder="Management dashboard"
              value={formData.tradeId}
              onChange={(e) => handleInputChange("tradeId", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Textinput
              label="Note*"
              id="note"
              type="text"
              placeholder="Management dashboard"
              value={formData.note}
              onChange={(e) => handleInputChange("note", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Select
              options={["Free", "Paid"]}
              label="User Type"
              value={formData.userType}
              onChange={(e) => handleInputChange("userType", e.target.value)}
            />
          </div>

          {/* Second Row */}
          <div className="mb-4">
            <Textinput
              label="Company Name*"
              id="companyName"
              type="text"
              placeholder="Management dashboard"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="default-picker" className="form-label">
              Date
            </label>
            <Flatpickr
              className="form-control py-2"
              placeholder="YYYY-MM-DD"
              id="default-picker"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e)}
            />
          </div>
          <div className="mb-4">
            <Select
              options={["Open", "Closed"]}
              label="Status"
              value={formData.status}
              onChange={(e) => handleInputChange("status", e.target.value)}
            />
          </div>

          {/* Third Row */}
          <div className="mb-4">
            <Textinput
              label="Buy Price"
              id="buyPrice"
              type="text"
              placeholder="Management dashboard"
              value={formData.buyPrice}
              onChange={(e) => handleInputChange("buyPrice", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Textinput
              label="SL Price"
              id="slPrice"
              type="text"
              placeholder="Management dashboard"
              value={formData.slPrice}
              onChange={(e) => handleInputChange("slPrice", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Upload Image</label>
            <Fileinput
              name="basic"
              selectedFile=""
              value={formData.image}
              onChange={(e) => handleInputChange("image", e.target.value)}
            />
          </div>

          {/* Fourth Row */}
          <div className="mb-4">
            <Textinput
              label="TGT Price"
              id="tgtPrice"
              type="text"
              placeholder="Management dashboard"
              value={formData.tgtPrice}
              onChange={(e) => handleInputChange("tgtPrice", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label" id="timepicker">
              Basic 24hrs
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
              onChange={(e) => handleInputChange("time", e)}
            />
          </div>
          <div className="mb-4">
            <Textinput
              label="Result Text View"
              id="resultTextView"
              type="text"
              placeholder="Management dashboard"
              value={formData.result}
              onChange={(e) => handleInputChange("result", e.target.value)}
            />
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
            onClick={handleGetTrades}
          />
          <Button
            text="Update"
            className="btn btn-warning text-lg px-4 py-2 rounded"
          />
        </div>
      </Card>

      {/* Additional Section */}
      <Card className="w-full mx-auto mt-3">
        <div className="ml-5 mt-3">
          <TradeActionTable title="Stock Data Table" stockData={stockData} />
        </div>
      </Card>
    </div>
  );
};

export default AddTradePage;
