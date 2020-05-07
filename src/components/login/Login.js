import React, { useState ,useEffect} from "react";
import { UserLogin } from "../../api/api";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    let user = {
      username: username,
      password: password,
    };

    console.log(user);

    let result = await UserLogin(user);
    console.log(result);

    let data_user = [{
        id : result.data._id,
        username : result.data.username
    }]

    if(result.status==='success'){
        localStorage.setItem('user',JSON.stringify(data_user))
        props.history.push('/home')
    }else if(result.status==='error'){
        alert(result.message)
    }
  };
  useEffect(() => {
      if(localStorage.getItem('user')){
          props.history.push('/home')
      }

  })
  return (
    <div>
      <form onSubmit={login}>
        <div className="base-container">
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img
                className="img-calculate"
                width="100"
                src={process.env.PUBLIC_URL + "components/login.png"}
              ></img>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                />
                {/* <input type="text" name="username" placeholder="username" /> */}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                {/* <input type="password" name="password" placeholder="password" /> */}
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn btn-outline-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
