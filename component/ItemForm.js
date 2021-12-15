import React, { useState } from "react";
import { useAuth } from "../contexts/auth";
import useItems from "../hooks/useItems";
import axios from "axios";
import Link from "next/link";
export default function ItemForm() {
  const [imageSelected, setImageSelected] = useState("");
  const [item, setItem] = useState({});
  const { user, login } = useAuth();
  const { loading, resources, createResource } = useItems();

  async function handleCreateItem(e) {
    e.preventDefault();
    const formDate = new FormData();
    formDate.append("file", imageSelected);
    formDate.append("upload_preset", "ybngoy1d");
    await axios
      .post("https://api.cloudinary.com/v1_1/duhbljjb2/image/upload", formDate)
      .then((response) => {
        if (loading) {
          console.log(loading);
        } else {
          const newUser = {
            id: resources?.length + 1,
            item_name: e.target.title.value,
            image: response.data.secure_url,
            category: e.target.category.value,
            description: e.target.description.value,
            init_price: e.target.price.value,
            bid_increment: e.target.bid_increment.value,
            highest_bidding: e.target.price.value,
            start_date: e.target.start_time.value,
            end_date: e.target.end_time.value,
            bidder_counter: 0,
            favorite_counter: 0,
            is_sold: false,
            owner: user.id,
            bidder: [],
          };
          setItem(newUser)
          console.log(newUser);
          createResource(newUser);
        }
      });
  }

  return (
    <>
      {/* <Header /> */}

      <div className="container flex flex-col w-full mx-auto">
        <div className="mx-auto my-4">
          <h3 className="mx-auto text-2xl font-semibold leading-6 text-gray-900">
            Add Product
          </h3>
          <p className="mx-auto my-4 text-sm text-gray-700">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <div >
          <form onSubmit={handleCreateItem} className="flex items-center justify-center mx-auto mb-8">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 space-y-6 bg-indigo-100 sm:p-6">
                <div className="">
                  <div className="py-2">
                    <div className="">
                      <label htmlFor="title" className="">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        // autoComplete="email"
                        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className=""
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="detail of your item"
                      defaultValue={""}
                    />
                  </div>
                </div>
                {/* -------Category ------- */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className=""
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    autoComplete="category-name"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Vehicles</option>
                    <option>{"Coins & Bullion"}</option>
                    <option>Art</option>
                    <option>Furniture</option>
                    <option>Electronics</option>
                    <option>Jewelry</option>
                  </select>
                </div>
                {/* -------Images ------- */}
                <div>
                  <label className="">
                    Images
                  </label>
                  <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="">
                        <label
                          htmlFor="image-upload"
                          className="relative font-medium text-indigo-600 rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a image</span>
                          <input
                            id="image-upload"
                            type="file"
                            className="sr-only"
                            onChange={(e) => {
                              setImageSelected(e.target.files[0]);
                            }}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                {/* -------Price ------- */}
                <div>
                  <label
                    htmlFor="price"
                    className=""
                  >
                    Price
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm ">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="block w-full pr-20 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
                      placeholder="0"
                      min="1"
                    />
                  </div>
                </div>

                {/* -------bid_increment ------- */}
                <div>
                  <label
                    htmlFor="bid_increment"
                    className=""
                  >
                    Min Bid
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm ">
                    <input
                      type="number"
                      name="bid_increment"
                      id="bid_increment"
                      className="block w-full pr-20 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
                      placeholder="0"
                      min="1"
                    />
                  </div>
                </div>
                {/* --------- Start Time ----------- */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className=""
                      >
                        Start Time
                      </label>
                      <input
                        type="datetime-local"
                        name="start_time"
                        id="start-time"
                        // autoComplete="email"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                {/* --------- End Time ----------- */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className=""
                      >
                        End Time
                      </label>
                      <input
                        type="datetime-local"
                        name="end_time"
                        id="end-time"
                        // autoComplete="email"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                {/* ------- Location ---------- */}
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="location"
                        className=""
                      >
                        Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        autoComplete="location-name"
                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Amman</option>
                        <option>Irbid</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-right bg-gray-100 sm:px-6">
                  <button
                    type=""
                    id='save-item'
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}