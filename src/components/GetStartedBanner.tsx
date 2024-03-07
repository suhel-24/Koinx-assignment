
function GetStartedBanner() {
    return (
      <div className="bg-[#234361] rounded-lg p-6 text-white max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get Started with KoinX for FREE</h2>
        <p className="mb-6">
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your
          tax reports.
        </p>
        <div className="flex justify-center mb-6">
          <img
            alt="Illustration"
            className="w-48 h-48"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
        </div>
        <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          Get Started for FREE
          <ArrowRightIcon className="ml-2" />
        </button>
        </div>
      </div>
    )
  }
  
  function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    )
  }

export default GetStartedBanner