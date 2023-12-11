import './table.css'

const Table = ({financialData }) => {

    return (
      <table className="table-container">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((data, index) => (
            <tr key={index}>
              <td>{data.company}</td>
              <td>{data.marketCap}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
export default Table