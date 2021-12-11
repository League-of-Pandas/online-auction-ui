import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function ItemForm() {
    return (
        <>
            <Header />
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Add Product</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    // autoComplete="email"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="description"
                                                name="description"
                                                rows={3}
                                                className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="detail of your item"
                                                defaultValue={''}
                                            />
                                        </div>

                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                            Category
                                        </label>
                                        <select
                                            id="category"
                                            name="category"
                                            autoComplete="category-name"
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Vehicles</option>
                                            <option>Arts</option>
                                            <option>Coin</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Images</label>
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
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="image-upload"
                                                        className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <span>Upload a image</span>
                                                        <input id="image-upload" name="image-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -------Price ------- */}
                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Price
                                        </label>
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">$</span>
                                            </div> */}
                                            <input
                                                type="number"
                                                name="price"
                                                id="price"
                                                className="block w-full pr-20 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
                                                placeholder="0.00"
                                                min="1"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pl-5">
                                                <label htmlFor="currency" className="sr-only">
                                                    Currency
                                                </label>
                                                <select
                                                    id="currency"
                                                    name="currency"
                                                    className="h-full py-0 pl-2 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-indigo-500 focus:border-indigo-500 pr-7 sm:text-sm"
                                                >
                                                    <option>USD</option>
                                                    <option>JD</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/* --------- Start Time ----------- */}
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Start Time
                                                </label>
                                                <input
                                                    type="datetime-local"
                                                    name="item-Name"
                                                    id="item-Name"
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
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    End Time
                                                </label>
                                                <input
                                                    type="datetime-local"
                                                    name="item-Name"
                                                    id="item-Name"
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
                                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
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
                                                {/* <input
                                                    type="text"
                                                    name="item-Name"
                                                    id="item-Name"
                                                    // autoComplete="email"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                /> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
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
                                        </div> */}

                                </div>
                                <div className="px-4 py-3 text-right bg-gray-100 sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>




            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
            {/*  */}

            <Footer />
        </>
    )
}
