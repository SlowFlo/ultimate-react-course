import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings.js";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    // By default, React Query will try to fetch the data 3 times,
    // but in this case not finding the data probably means that
    // it doesn't exist in the first place.
    retry: false,
  });

  return { isLoading, error, booking };
}
