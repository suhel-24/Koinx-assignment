
export default function Sentiment() {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Sentiment</h2>
        <div className="mt-4">
          <h3 className="flex items-center text-lg font-medium">
            Key Events
            <InfoIcon className="text-blue-500 ml-2" />
          </h3>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div className="flex space-x-4 bg-gray-100 p-4 rounded-lg">
              <TextIcon className="text-blue-500" />
              <div>
                <p className="font-medium">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam
                  viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
                  natoque lacinia libero enim.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 bg-gray-100 p-4 rounded-lg">
              <CheckCircleIcon className="text-green-500" />
              <div className="flex-grow">
                <p className="font-medium">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam
                  viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
                  natoque lacinia libero enim.
                </p>
              </div>
              <ChevronRightIcon className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="flex items-center text-lg font-medium">
            Analyst Estimates
            <InfoIcon className="text-blue-500 ml-2 " />
          </h3>
          <div className="mt-2 grid grid-cols-1">
            <div className="flex items-center">
<div className="text-5xl font-semibold text-green-500 mr-4 px-5 py-5 bg-green-200 rounded-full w-32 h-32 flex items-center justify-center ">
  76%
</div>
              <div className="flex-grow">
                <div className="flex items-center justify-between text-sm font-medium mb-1">
                  <span>Buy</span>
                  <span>76%</span>
                </div>
                <Progress className="w-full bg-gray-200 rounded h-2.5" value={76} />
                <div className="flex items-center justify-between text-sm font-medium mb-1 mt-3">
                  <span>Hold</span>
                  <span>8%</span>
                </div>
                <Progress className="w-full bg-gray-200 rounded h-2.5" value={8} />
                <div className="flex items-center justify-between text-sm font-medium mb-1 mt-3">
                  <span>Sell</span>
                  <span>16%</span>
                </div>
                <Progress className="w-full bg-gray-200 rounded h-2.5" value={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  function Progress({ value, className }) {
  return (
    <div className={`w-full bg-gray-200 rounded ${className}`}>
      <div
        className="bg-green-500 h-2.5 rounded"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

  
  function CheckCircleIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }
  
  
  function ChevronRightIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }
  
  
  function InfoIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    )
  }
  
  
  function TextIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 6.1H3" />
        <path d="M21 12.1H3" />
        <path d="M15.1 18H3" />
      </svg>
    )
  }
  