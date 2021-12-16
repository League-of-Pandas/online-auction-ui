export default function AboutUS() {
  return (
    <div className="mb-16 rounded-lg">
      <div className="container mx-auto">
        <h1 className="my-8 text-4xl font-black text-center text-yellow-500">About Us</h1>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="p-5 border-2 border-yellow-500 rounded-lg shadow-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tasneem Al-Absi
              </h5>
              <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">
                Software developer with a background in physics. I aspire to be
                a professional programmer.
              </p>
              <a
                className="p-4 m-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
                href="https://www.linkedin.com/in/tasneem-alabsi/"
              >
                <button>LinkedIn</button>
              </a>
            </div>
            <div className="p-5 border-2 border-yellow-500 rounded-lg shadow-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tahany Ali
              </h5>
              <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">
                Software Developer with a keen eye for detail and a
                determination to deliver the highest quality .
              </p>
              <a
                className="p-4 m-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
                href="https://www.linkedin.com/in/tahany-ali/"
              >
                <button>LinkedIn</button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="p-5 border-2 border-yellow-500 rounded-lg shadow-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Abdullah Nazzal
              </h5>
              <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">
                I am software engineer. I believe the Software Engineering will
                change my life.
              </p>
              <a
                className="p-4 m-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
                href="https://www.linkedin.com/in/abdullah-nazzal/"
              >
                <button>LinkedIn</button>
              </a>
            </div>
            <div className="p-5 border-2 border-yellow-500 rounded-lg shadow-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Anas Abusaif
              </h5>
              <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">
                Full stack web developer with a Bachelor's degree in civil
                engineering.
              </p>
              <a
                className="p-4 m-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
                href="https://www.linkedin.com/in/anas-abusaif"
              >
                <button>LinkedIn</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
