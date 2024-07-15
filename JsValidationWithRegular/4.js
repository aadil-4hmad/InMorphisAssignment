function searchDate(str) {
    const dateRegex = /\b(?:\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}[/-]\d{1,2}[/-]\d{1,2})\b/g;
    const matches = str.match(dateRegex);
    return matches;
  }
  
  const str = "I have a meeting on 12/25/2022 and another one on 2023-02-14";
  const dates = searchDate(str);
  console.log(dates); // Output: ["12/25/2022", "2023-02-14"]