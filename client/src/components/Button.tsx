type props = {
  btntext: string;
  url?: string;
  pri?: boolean;
};

function Button({ btntext, pri, url }: props) {
  return (
    <button
      className={` ${
        pri ? "bg-primary" : "border border-gray-300 hover:bg-gray-300"
      } cursor-pointer px-10 py-3 rounded-full transition-colors duration-300 ease-in-out`}
    >
      <p className="uppercase font-bold"> {btntext} </p>
    </button>
  );
}

export default Button;
