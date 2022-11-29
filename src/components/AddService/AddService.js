import React from "react";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.name.value;
    const serviceImg = form.img.value;
    const price = form.price.value;
    const serviceDetails = form.details.value;

    const service = {
      serviceName,
      serviceImg,
      price,
      serviceDetails,
    };

    fetch("https://service-review-server-assignment-11.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("New Service added succesfully!");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
      <div className=" flex justify-center mb-4">
        <div className="card bg-base-100 shadow-xl w-2/6 mb-1">
          <div className="card-body">
            <h2 className="  text-4xl font-bold pb-4 text-center">
              Add a new service!
            </h2>
            <form onSubmit={handleAddService}>
              <div className="form-control mb-4">
                <label className="input-group input-group-vertical">
                  <span className="py-1 font-bold">Service Name</span>
                  <input
                    type="text"
                    placeholder="Enter service name"
                    className="input input-bordered"
                    name="name"
                  />
                </label>
              </div>
              <div className="form-control mb-4">
                <label className="input-group input-group-vertical">
                  <span className="py-1 font-bold">Image URL</span>
                  <input
                    type="text"
                    placeholder="Enter service image URL"
                    className="input input-bordered"
                    name="img"
                  />
                </label>
              </div>
              <div className="form-control mb-4">
                <label className="input-group input-group-vertical">
                  <span className="py-1 font-bold">Price</span>
                  <input
                    type="text"
                    placeholder="Enter price"
                    className="input input-bordered"
                    name="price"
                  />
                </label>
              </div>
              <div className="form-control mb-4">
                <label className="input-group input-group-vertical">
                  <span className="py-1 font-bold">Service Details</span>
                  <input
                    type="text"
                    placeholder="Enter details"
                    className="input input-bordered"
                    name="details"
                  />
                </label>
              </div>

              <div className="card-actions justify-center">
                <button type="submit" className="btn btn-primary">
                  Add service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
