import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-gray-600">
      <AiOutlineLoading3Quarters className="animate-spin text-3xl text-indigo-600 mb-2" />
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

export default Loading;
