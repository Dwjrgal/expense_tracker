import React from "react";

const Signin = () => {
  return (
    <>
      <section>
        <div>
          <img src="./img/GELD.png" alt="" className="h-5 mb-3" />
          <h4 className="font-bold text-center">Create Geld account</h4>
          <p>Sign up below to create your Wallet account</p>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input type="text" className="grow" placeholder="Daisy" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Password" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Re-password" />
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
