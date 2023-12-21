import { useReducer } from "react";

import { fetchAPI } from "../../hooks/bookingsAPI";

import Heading from "../../components/Heading";
import ReservationForm from "./ReservationForm";

const ReservationPage = () => {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading title="Reserve a table" />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}

export default ReservationPage;
