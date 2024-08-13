const Pagination = () => {
  const entryList = [10, 20, 30, 40, 50, 100];
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center">
        <div className="mr-2 font-medium text-black">Item per page</div>
        <div className="ml-2">
          <select className="text-[#0077d4] text-center rounded-md bg-white">
            {entryList.map((entry) => (
              <option value={entry}>{entry}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
