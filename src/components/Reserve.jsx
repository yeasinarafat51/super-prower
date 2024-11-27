import Button from "../common/Button";
import check from "../images/ph_check-circle-duotone.png";

const Reserve = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between   gap-4 md:mx-20 mx-4 my-16  dark:bg-gray-900 p-4">
      <div className="space-y-3">
        <p className="text-[20px] font-semibold text-white">
          Got a project in mind ?
        </p>
        <p className="text-[30px] font-bold text-white">Reserve a call</p>
        <div className="flex justify-start items-center gap-4 text-white">
          <img src={check} alt="" />
          <p>Quick to ramp</p>
        </div>
        <div className="flex justify-start items-center gap-4 text-white">
          <img src={check} alt="" />
          <p>Quick to ramp</p>
        </div>
        <div className="flex justify-start items-center gap-4 text-white">
          <img src={check} alt="" />
          <p>Quick to ramp</p>
        </div>
        <p className="text-[20px] font-semibold text-white">
          Tecnikal Support or Query ?
        </p>
      </div>
      <div className="w-full max-w-md bg-transparent rounded-lg shadow border-2 border-red-200 p-6">
        <form>
          <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-red-500 ">
            Tell us about yourself
          </h2>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md bg-red-500 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md  bg-red-500 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company size
            </label>
            <select
              name=""
              id=""
              className="w-full px-3 py-2 border rounded-md  bg-red-500 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            >
              <option value="">1-20</option>
              <option value="">1-20</option>
              <option value="">1-20</option>
            </select>
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              How can help you
            </label>
            <textarea
              id="message"
              rows="2"
              placeholder="Enter your message"
              className="w-full px-3 py-2 border  bg-red-500 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <p className="text-white">
              you can also Email us <br /> At abc@gmail.com
            </p>
            <Button>Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reserve;
