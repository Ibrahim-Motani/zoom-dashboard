import React, { useState } from "react";

function FileUpload({onSetColumns, onSetData, onSetDataForCharts, onSetMax, onSetAvg}) {
  const [file, setFile] = useState();

  const fileUploadHandler = event => { 
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
      let reader = new FileReader();
      reader.onload = function () {
        const data = reader.result;
        console.log(data);
        const lines = data.trim().split("\n");

        function transformer(str) {
          // split the str first
          // then merge the elments between two double quotes
          let delimiter = ",";
          const quotes = '"';
          const elements = str.split(delimiter);
          const newElements = [];

          for (let i = 0; i < elements.length; ++i) {
            if (elements[i].indexOf(quotes) >= 0) {
              // the left double quotes is found
              let indexOfRightQuotes = -1;
              let tmp = elements[i];
              // find the right double quotes
              for (let j = i + 1; j < elements.length; ++j) {
                if (elements[j].indexOf(quotes) >= 0) {
                  indexOfRightQuotes = j;
                  break;
                }
              }
              // found the right double quotes
              // merge all the elements between double quotes
              if (-1 !== indexOfRightQuotes) {
                for (let j = i + 1; j <= indexOfRightQuotes; ++j) {
                  tmp = tmp + delimiter + elements[j];
                }
                newElements.push(tmp);
                i = indexOfRightQuotes;
              } else {
                // right double quotes is not found
                newElements.push(elements[i]);
              }
            } else {
              // no left double quotes is found
              newElements.push(elements[i]);
            }
          }
          return newElements;
        }

        const finalData = lines.map(line => {
          let temp = transformer(line);
          return temp;
        });

        const columnNames = finalData.shift();

        const transformedData = finalData.map(arr => {
          return {
            name: arr[0].trim(),
            email: arr[1].trim(),
            duration: Number(arr[2].trim()),
            guest: arr[3].trim().toLowerCase(),
          };
        });

        const transformedColumns = [
          "Student Name",
          "Student Attendance",
          "Average Attendance",
          "Maximum Attendance",
        ];

        const max = transformedData.reduce(
          (acc, curr) => (curr.duration > acc ? curr.duration : acc),
          0
        );
        const avg = Math.floor(
          transformedData.reduce((acc, curr) => (acc += curr.duration), 0) / transformedData.length
        );

        const transformedDataForCharts  = transformedData.map(obj => {
          return [obj.name, obj.duration, avg, max];
        });
        transformedDataForCharts.unshift(transformedColumns);

        onSetDataForCharts(transformedDataForCharts);
        onSetMax(max);
        onSetAvg(avg);
        onSetColumns(columnNames);
        onSetData(transformedData);
      };

      reader.readAsText(file);
  };

  return (
      <div className="App">
          <h1>File Upload + CSV Parser</h1>
      <input type="file" name="file" onChange={fileUploadHandler} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FileUpload;
