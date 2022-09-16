import dayjs from "dayjs";

export const formattime = (time: string | Date) => {
  return dayjs(time).format("YYYY-MM-DD hh:mm");
};
