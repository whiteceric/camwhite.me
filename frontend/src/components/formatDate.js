import { useEffect, useState } from "react";

const months = new Map();
months["01"] = "January";
months["02"] = "February";
months["03"] = "March";
months["04"] = "April";
months["05"] = "May";
months["06"] = "June";
months["07"] = "July";
months["08"] = "August";
months["09"] = "September";
months["10"] = "October";
months["11"] = "November";
months["12"] = "December";

export const formatDate = (date) => {
  const toks = date.split("-");
  return months[toks[1]] + " " + toks[2] + ", " + toks[0];
};
