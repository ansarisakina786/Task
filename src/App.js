
import React, { useState } from "react";
import './App.css';

function MonthOneTable() {
  const [tableData, setTableData] = useState([
    {
      task: "Onboarding Call",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Google Search Console Access",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Google Analytics Access",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Website Access",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Technical Audit",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Anchor Text and Semantic Analysis",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Competitor Analysis",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Anchor Text / URL Mapping",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Google Data Studio Report + Local Reporting Suite",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Site Level Optimization",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "On Page Optimization",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Content Creation",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Content Publishing",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Premium Press Release",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Authority Niche Placements",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Review Management",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Index Links",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
    {
      task: "Video Recap",
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
    },
  ]);

  const handleCellChange = (index, field, value) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };

  const handleSubmit = () => {
    const dataToPost = tableData.map(
      ({ task, status1, status2, status3, status4, status5, status6 }) => ({
        task,
        status1,
        status2,
        status3,
        status4,
        status5,
        status6,
      })
    );
    console.log("Data to post:", dataToPost);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>MONTH 1</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="box">{row.task}</td>
              <td>
                <input
                  type="text" 
                  value={row.status1}
                  onChange={(e) =>
                    handleCellChange(index, "status1", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.status2}
                  onChange={(e) =>
                    handleCellChange(index, "status2", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.status3}
                  onChange={(e) =>
                    handleCellChange(index, "status3", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.status4}
                  onChange={(e) =>
                    handleCellChange(index, "status4", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.status5}
                  onChange={(e) =>
                    handleCellChange(index, "status5", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.status6}
                  onChange={(e) =>
                    handleCellChange(index, "status6", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MonthOneTable;