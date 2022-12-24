import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const Data = () => {
  const [activityData, setActivityData] = useState(null);

  const getActivityData = () => {
    const data = require("../utils/data/strava.json");
    setActivityData(data);
  };

  useEffect(() => {
    getActivityData();
  }, []);

  const totalDistance =
    activityData &&
    activityData.reduce((acc, activity) => acc + activity.distance, 0);
  const totalDistanceInMiles = (totalDistance / 1609.34).toFixed(2);

  return (
    <Layout>
      <div className="h-min-screen flex flex-col md:flex-row justify-between w-full">
        <div className="w:full md:w-1/2 font-helvetica text-sm">
          {activityData &&
            activityData.map((activity) => (
              <div
                key={activity.id}
                className="border-b border-gray-200 border-solid"
              >
                <div className="flex flex-row justify-between md:px-6">
                  <span>{activity.name}</span>
                  <span>{(activity.distance / 1609.34).toFixed(2)} miles</span>
                </div>
              </div>
            ))}
        </div>
        <div className="w:full md:w-1/2 h-auto bg-black">
          <svg width={totalDistanceInMiles} height={totalDistanceInMiles}>
            {/* Add your SVG elements here */}
          </svg>
          <p>Total distance: {totalDistanceInMiles} miles</p>
        </div>
      </div>
    </Layout>
  );
};

export default Data;
