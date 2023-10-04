import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate(null);
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const password = form.get("password");
    const photo = form.get("photo");
    console.log(name, email, password, photo);
    //Create USer
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-2xl text-center my-10">Please Register</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 mx-auto lg:w-1/2 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="font-bold  text-blue-700" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
