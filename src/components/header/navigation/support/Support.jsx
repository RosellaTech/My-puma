import "./Support.css";

const Support = () => {
  return (
    <section>
    <div className=" pl-55 w-full h-full bg-white rounded-2xl shadow-md space-y-4">
      <br />
      <p className="text-lg font-semibold">Got questions or suggestions?</p>
      
      <p className="text-base font-semibold">Get in touch.</p>
      <br />
    
      <p className="mt-4 text-sm font-semibold text-gray-700 uppercase">Customer Service</p>
      <p className="text-sm text-gray-600 font-semibold">
        Email: <a href="mailto:service-dfa@puma.com" className="text-blue-500 hover:underline">service-dfa@puma.com</a>
      </p>
     <br />
      <p className="mt-4 text-sm  text-gray-700 font-semibold">Business hours:</p>
      <p className="text-sm text-gray-600">Monday to Friday from 9 am - 6 pm GST</p>
      <br />
    </div>
  </section>
  
  );
};

export default Support;
