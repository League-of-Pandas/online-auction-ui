import Link from "next/link";
import { useAuth } from "../contexts/auth";
import useItems from "../hooks/useItems";

export default function Profile() {
  const { user } = useAuth();
  const { resources, loading } = useItems();

  return (
    <>
      {/* ---------My Items----------- */}
      <div className="bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">My Items</h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {loading
                ? console.log(loading)
                : resources?.map((item) => (
                    <>
                      {item.owner === user.id ? (
                        <>
                          <div key={item.id} className="relative group">
                            <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                              <img
                                src={item.image}
                                alt={item.item_name}
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500"></h3>
                            <p className="text-base font-semibold text-gray-900">
                              {item.description}
                            </p>
                            <Link
                              href="/detail/[id].js"
                              as={`/detail/${item.id}`}
                            >
                              <button
                                id="bid-browse"
                                className="w-24 my-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-800"
                              >
                                Bid Now
                              </button>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
            </div>
          </div>
        </div>
      </div>
      {/* ---------My Bidding Items----------- */}
      <div className="bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">
              My Bidding Items
            </h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {loading
                ? console.log(loading)
                : resources?.map((item) => (
                    <>
                      {item.bidder.includes(user.id) ? (
                        <>
                          <div key={item.id} className="relative group">
                            <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                              <img
                                src={item.image}
                                alt={item.item_name}
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500"></h3>
                            <p className="text-base font-semibold text-gray-900">
                              {item.description}
                            </p>
                            <Link
                              href="/detail/[id].js"
                              as={`/detail/${item.id}`}
                            >
                              <button
                                id="bid-browse"
                                className="w-24 my-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-800"
                              >
                                Bid Now
                              </button>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
            </div>
          </div>
        </div>
      </div>
      {/* ---------My winner Items----------- */}
      <div className="bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">
              My winner Items
            </h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {loading
                ? console.log(loading)
                : resources?.map((item) => (
                    <>
                      {item.bidder[0] === user.id && item.is_sold ? (
                        <>
                          <div key={item.id} className="relative group">
                            <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                              <img
                                src={item.image}
                                alt={item.item_name}
                                className="object-cover object-center w-full h-full"
                              />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500"></h3>
                            <p className="text-base font-semibold text-gray-900">
                              {item.description}
                            </p>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
