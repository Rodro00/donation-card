import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/LocalStorage";

const Statistic = () => {
  const allDonations = useLoaderData();
  // console.log(allDonations);

  useEffect(() => {
    const storedDonationId = getStoredDonation();

    if (allDonations.length > 0) {
      const giveDonation = allDonations.filter(donation => storedDonationId.includes(donation.id));
      console.log(giveDonation);
    }
  }, [allDonations]);

  return (
    <div>
      <h1>This is the statistic part. This part will be manipulate as soon as possible.</h1>
    </div>
  );
};

export default Statistic;
