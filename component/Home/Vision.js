export default function Vision() {
  return (
    <div className="px-4 py-6 sm:p-6 md:py-10 md:px-8 ">
      <div className="relative flex flex-col-reverse col-start-1 row-start-1 p-3 rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="text-2xl font-semibold text-center text-black sm:text-gray-900 md:text-2xl">Our Vision</h1>
      </div>
      <div className="grid max-w-4xl grid-cols-1 mx-auto lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 ">
        <div className="grid col-start-1 col-end-3 row-start-1 gap-4 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src="https://i.ibb.co/M2HpRzr/Screenshot-from-2021-12-10-23-08-21.png"
            alt=""
            className="rounded-lg h-36 sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-46"
            loading="lazy"
          />
          <img
            src="https://i.ibb.co/4sxdYSv/Screenshot-from-2021-12-10-23-06-10.png"
            alt=""
            className="rounded-lg h-36 sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-46"
            loading="lazy"
          />
        </div>

        <p className="col-span-1 col-start-1 row-start-2 mt-4 text-sm leading-6  lg:mt-6">
          An online auction website that offers variety of valuables,
          collectables, cars, electronics and much more for the users to browse
          and bid on. And a modern and secure method to bid on your needs
          without getting mixed in public crowds and to guarantee your safety.
        </p>
      </div>
    </div>
  );
}
