import React from "react";
import Chart from "react-google-charts";

function Figure({data}) {
  return (
    <Chart
      width={"700px"}
      height={"400px"}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        // Material design options
        chart: {
          title: "Student Attendance",
          subtitle: "Student's attendance in minutes, Maximum and Average",
        },
      }}
      // For tests
      rootProps={{ "data-testid": "2" }}
    />
  );
;
}


export default Figure;
