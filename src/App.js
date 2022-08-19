import "./styles.css";
import { useState } from "react";
export default function App() {
  const world = [
    {
      name: "adam",
      maths: 30,
      social: 45
    },
    {
      name: "donald",
      maths: 30,
      social: 30
    },
    {
      name: "Mark",
      maths: 32,
      social: 40
    },
    {
      name: "adam2",
      maths: 37,
      social: 45
    },
    {
      name: "donald2",
      maths: 38,
      social: 32
    },
    {
      name: "Mark2",
      maths: 36,
      social: 30
    }
  ];
  let loopData: [] = world;
  function filterData() {
    //alert(1)
  }

  function setFilts() {
    //setFilt(...ProgressEvent);
    loopData = world.filter((studentObj) => {
      return studentObj.name.includes(filt);
    });
    //loopData = world;
  }
  const [filt, setFilt] = useState(0);
  const data = { maths: 0, mathsLen: 0, socialLen: 0, social: 0 };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        value={filt}
        name="search"
        onChange={(e) => {
          setFilt((prevState) => {
            //setFilts();
            const valoop = world.filter((studentObj) => {
              return studentObj.name.includes(filt);
            });
            loopData = valoop;
            console.log(valoop);
            //return {...prevState, loopData: valoop}

            //return { ...prevState, message: val };
            // return Object.assign({}, prevState, { message: val }); // Also works
          });
        }}
      />
      <table>
        <thead>
          <th>name</th>
          <th>math</th>
          <th>Science</th>
        </thead>
        <tbody>
          {loopData.map(function (value) {
            return (
              <tr>
                <td>{value.name}</td>
                <td>{value.maths}</td>
                <td>{value.social}</td>
              </tr>
            );
          })}
          <tr>
            {world.map((val) => {
              data.mathsLen = data.mathsLen + 1;
              data.socialLen = data.socialLen + 1;
              data.maths = data.maths + val.maths;
              data.social = data.social + val.social;
            })}
            {console.log(data)}
            <td>Total</td>
            <td>{(data.maths / data.mathsLen).toFixed(2)}</td>
            <td>{data.social / data.socialLen}</td>
          </tr>
        </tbody>
      </table>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
