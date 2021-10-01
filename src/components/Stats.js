import React, { useState, useEffect } from "react";
import Figure from "./Figure";
import Table from "./Table";

function Stats({ columns, data, dataForCharts, avg, max }) {
  const [dataIsArrived, setDataIsArrived] = useState(false);

  const host = data.filter(obj => obj.guest === "no");

    useEffect(() => {
        if (host.length === 0) {
            setDataIsArrived(false);
        } else {
            setDataIsArrived(true);
        }
  }, [host]);

  return (
    <div>
      <h1>Report</h1>
      {dataIsArrived && (
        <div>
          <h3>Host - {host[0].name}</h3>
          <h3>Total Participants - {data.length}</h3>
          <h3>
            Duration - {host[0].duration} minutes ({" "}
            {Math.floor(host[0].duration / 60)} hour {host[0].duration % 60}{" "}
            minutes)
          </h3>
          <Table data={data} />
          <Figure data={dataForCharts} />
        </div>
      )}
    </div>
  );
}

export default Stats;
