import { useState } from 'react';
import FileUpload from './components/FileUpload';
import Stats from './components/Stats';

function App() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [dataForCharts, setDataForCharts] = useState([]);
  const [max, setMax] = useState('');
  const [avg, setAvg] = useState('');

  const onSetColumns = columnNames => {
    setColumns(columnNames);
    console.log(columnNames);
  };

  const onSetData = transformedData => {
    setData(transformedData);
    console.log(transformedData);
  };

  const onSetDataForCharts = transformedDataForCharts => {
    setDataForCharts(transformedDataForCharts);
    console.log(transformedDataForCharts);
  };

  const onSetMax = max => setMax(max);

  const onSetAvg = avg => setAvg(avg);

  return (
    <div>
      <FileUpload onSetColumns={onSetColumns} onSetData={onSetData} onSetDataForCharts={onSetDataForCharts} onSetAvg={onSetAvg} onSetMax={onSetMax} />
      <Stats columns={columns} data={data} dataForCharts={dataForCharts} max={max} avg={avg} />
    </div>
  );
}

export default App;
