// FeederCard.tsx

import { feederCardData } from "./FeederCardData";

type FeederCardProps = {
  category: keyof typeof feederCardData;
};

export default function FeederCard({ category }: FeederCardProps) {
  const data = feederCardData[category];

  if (!data) return null;

  return (
    <div className={data.wrapperClass} style={{ minWidth: "450px", height: "100%", backgroundColor: '#ededed' }}>
      <div className="eMjLTV"></div>
      <div className="jXkdjn">
        <div
          aria-label=""
          className=""
        ></div>
        <div className="p-5">
          <p className="text-center faktHt">
            <span>Contact me</span>
          </p>
          <h2 className="border-bottom border-1">{data.h2}</h2>
          <h5 className="my-5 py-5">{data.h5}</h5>
          <button
            type="button"
            className="btn btn-primary btn-center-align"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
            style={{ top: "60px" }}
          >
            Lets Chat today!
          </button>
        </div>
      </div>
    </div>
  );
}
