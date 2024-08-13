import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formEntries = Object.fromEntries(formData.entries());
        console.log(formEntries);
      }}
      className="bg-white shadow-[0px_26px_26px_0px_#6A163A0A] rounded-xl"
    >
      <label className=" flex flex-row items-center gap-5 px-6 py-3">
        <input
          type="text"
          name="search"
          className="flex-1 outline-none placeholder:text-lightGray !min-w-0"
          placeholder="Search here"
        />
        <IoSearch size={24} />
      </label>
    </form>
  );
};

export default SearchInput;
