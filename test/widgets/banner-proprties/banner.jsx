import { data } from "./mock-data";
export const Banner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
     {data?.title && <div className="pl-10 pt-10 font-bold text-4xl">{data?.title}</div>}
      {data?.button && (
        <div className="flex items-end justify-end  pt-4 pr-8">
          <button className="grid grid-cols-4 text-lg font-bold border-2 border-black p-2">
            <div className="col-span-3"> {data?.button}</div>
            <div className="pl-3 pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
