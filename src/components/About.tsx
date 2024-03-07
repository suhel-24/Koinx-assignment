export default function About() {
  const cardData = [
    {
      bgColor: "bg-[#1A1C2C]",
      imgSrc: "https://upstox.com/app/themes/upstox/dist/img/home/home_banner_slide_2.png",
      title: "Calculate your Profits",
      buttonText: "Check Now",
      buttonBgColor: "bg-[#22C55E]",
      buttonTextColor: "text-white",
    },
    {
      bgColor: "bg-[#F97316]",
      imgSrc: "https://upstox.com/app/themes/upstox/dist/img/home/home_banner_slide_2.png",
      title: "Calculate your tax liability",
      buttonText: "Check Now",
      buttonBgColor: "bg-white",
      buttonTextColor: "text-[#F97316]",
    },
  ];
  return (
    <div
      key="1"
      className="max-w-4xl mx-auto my-8 p-6 bg-white shadow rounded-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">About Bitcoin</h2>
      <p className="mb-4">
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
      <hr />
      <h3 className="text-xl font-semibold mb-4">Lorem ipsum dolor sit amet</h3>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pellentesque enim facilisi diam ut sed. Quam scelerisque fermentum
        sapien morbi sodales odio sed rhoncus.
      </p>
      <p className="mb-4">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p className="mb-8">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      <hr />
      <h2 className="text-2xl font-semibold mb-4">Already Holding Bitcoin?</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {/* Card 1 */}
        <div className="flex justify-between">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex items-center ${card.bgColor} text-white rounded-lg overflow-hidden`}
            >
              <img
                alt={card.title}
                className="rounded-l-md"
                src={card.imgSrc}
                style={{
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
                width="100"
                height="100"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{card.title}</h2>
                <button
                  className={`mt-2 inline-flex items-center ${card.buttonBgColor} ${card.buttonTextColor} px-3 py-2 rounded-md`}
                >
                  {card.buttonText}
                  <ArrowRightIcon className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
}

function ArrowRightIcon(props) {
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
  );
}
