import './ResultsTable.css'

function ResultsTable({ data = [] }) {
  return (
    <div className="results-container">
      <h2 className="results-title">Investment Results</h2>
      <div className="table-wrapper">
        <table className="results-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr key={index}>
                  <td>{row.year}</td>
                  <td>${row.investmentValue?.toLocaleString() || '0'}</td>
                  <td>${row.interestYear?.toLocaleString() || '0'}</td>
                  <td>${row.totalInterest?.toLocaleString() || '0'}</td>
                  <td>${row.investedCapital?.toLocaleString() || '0'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  Enter investment details to see results
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ResultsTable
