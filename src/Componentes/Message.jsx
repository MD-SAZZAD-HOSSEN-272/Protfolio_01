
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "./Loader";

const Messages = () => {
  const axiosSecure = useAxiosSecure();

  const {data: messages = [], isLoading, error} = useQuery({
    queryKey: ['message'],
    queryFn: async() => {
        const res = axiosSecure.get('/message')
        return (await res).data
    }
  })

  if (isLoading) return <Loader></Loader>;
  if (error) return <p>Error loading messages</p>;

  return (
    <div className="rounded-2xl bg-gray-100 py-10 px-4 flex flex-wrap justify-center gap-6">
      {messages.map((message) => (
        <div
          key={message._id}
          className="bg-white w-full max-w-sm rounded-xl shadow-md border p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">{message.name}</h2>
          <p className="text-sm text-gray-500 mb-2">ID: {message._id}</p>
          <p className="text-gray-700">
            <strong>Email:</strong> {message.email}
          </p>
          <p className="mt-2 text-gray-800">
            <strong>Message:</strong> {message.message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Messages;
