import React from "react";

const UserDashboard = () => {
  return (
    <>
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <div className="flex justify-center mt-3">
          <button
            className="btn btn-neutral btn-block btn-xl"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Create a New Product.
          </button>

          <dialog id="my_modal_2" className="modal">
            <div className="modal-box flex flex-col items-center justify-center gap-3">
              <h3 className="font-bold text-lg text-center">Your Product!</h3>
              {/* <p className="pb-1 text-center">
                Press ESC key or click outside to close
              </p> */}

              <input
                type="text"
                placeholder="Title"
                className="input input-success w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Price"
                className="input input-success w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Category"
                className="input input-success w-full max-w-xs"
              />

              <label className="input">
                Path
                <input type="text" className="grow" placeholder="src/app/" />
                <span className="badge badge-neutral badge-xs">Optional</span>
              </label>
              <button className="btn btn-active btn-warning">Submit</button>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
