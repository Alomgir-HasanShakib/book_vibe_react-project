const Contact = () => {
  return (
    <div className="mb-10">
      <div className="bg-[#1313130D] rounded-lg mt-9 mb-9 py-8">
        <h2 className="text-3xl font-bold text-[#131313] text-center">
          Contact
        </h2>
      </div>
      <div className="grid grid-cols-5 bg-[#23BE0A0D] p-16 rounded-lg gap-10">
        <div className="col-span-5 md:col-span-3 ">
          <h2 className="text-3xl md:text-5xl font-bold fair-dis t-primary pb-10">
            Contact Us Now
          </h2>
          <p className="text-xl md:text-2xl font-medium text-[#13131380]">
            If you have any questions or just want to connect, feel free to
            reach out!
            <p className="text-xl md:text-xl font-medium text-[#13131370] pt-5">
              {" "}
              We’re here to connect with you. Our availability is from Monday to
              Friday, between 8:30 a.m. and 5:30 p.m. Eastern Standard Time. We
              make it a priority to respond to all emails within 24 hours. Don’t
              hesitate to get in touch.
            </p>
          </p>
        </div>
        <div className="col-span-5 md:col-span-2 space-y-3">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <textarea
            placeholder="Write Your Messege Here"
            className="textarea textarea-bordered textarea-lg w-full max-w-full resize-none"
          ></textarea>
          <label>
            <input
              type="submit"
              value="Send"
              className="btn primary-bg w-full mt-5 text-white font-bold text-xl hover:bg-transparent hover:border-[#23be0a] hover:text-[#23be0a] "
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Contact;
