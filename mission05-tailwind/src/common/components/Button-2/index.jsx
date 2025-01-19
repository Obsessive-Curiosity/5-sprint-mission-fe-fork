export default function Button({ children, ...props }) {
  return (
    <button
      className="w-full bg-[#3692FF] text-gray-100 text-base font-semibold leading-[26px] rounded-[40px] px-6 py-2 hover:cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}
