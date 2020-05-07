/* Register.jsx */
import React, { useState ,useEffect} from "react";
//import loginImg from "../../login.svg";
import { registerUser } from "../../api/api";

export default function Register(props) {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const insertUser = async (e) => {
    e.preventDefault();
    let user = {
      username: username,

      password: password,
      name: name,
      age: age,
      salary: salary,
    };

    // let result = await registerUser(user);
    // console.log(result);
     console.log(user);
        // if(result.status==='sucecss'){
        //     alert('สมัครเรียบร้อยแล้ว')
        //     // setUsername(null)
        //     // setPassword = ''
        //     // setName = ''
        //     // setAge = 0
        //     // setSalary = 0
        //     props.history.push('/login')
        // }
  };

  useEffect(() => {
      console.log('object')
      // return () => {

      // }
  })

  return (
    <div>
      <form onSubmit={insertUser}>
        <div className="base-container register ">
          <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <img
                className="img-calculate"
                width="20"
                src={process.env.PUBLIC_URL + "components/register.png"}
              ></img>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                {/* <input type="text" name="username" placeholder="username" /> */}
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                {/* <input type="text" name="password" placeholder="password" /> */}
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Salary</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
