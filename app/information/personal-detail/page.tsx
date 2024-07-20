export function PersonalDetail() {
  return (
    <>
      <div className="mt-6">
        <h1 className="flex items-center gap-2 text-ld text-gray-400 font-bold my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ea1a4e"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-info w-5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          PERSONAL DETAILS
        </h1>
        <div className=" shadow-xl px-4 py-2 border rounded-xl">
          <div className=" flex justify-between items-center border-b py-2">
            <p className=" font-semibold">Name</p>
            <p className="text-gray-400">Hein Thiha</p>
          </div>
          <div className=" flex justify-between items-center border-b py-2">
            <p className=" font-semibold">Citizen</p>
            <p className="text-gray-400">Myanmar</p>
          </div>
          <div className=" flex justify-between items-center border-y py-2">
            <p className=" font-semibold">Date of Birth</p>
            <p className="text-gray-400">19 November 2004</p>
          </div>
          <div className=" flex justify-between items-center border-y py-2">
            <p className=" font-semibold">Age</p>
            <p className="text-gray-400">19</p>
          </div>
          <div className=" flex justify-between items-center border-b py-2">
            <p className=" font-semibold">Gender</p>
            <p className="text-gray-400">Male</p>
          </div>
          <div className=" flex justify-between items-center border-y py-2">
            <p className=" font-semibold">Weight</p>
            <p className="text-gray-400">62 kg</p>
          </div>
          <div className=" flex justify-between items-center border-y py-2">
            <p className=" font-semibold">Height</p>
            <p className="text-gray-400">168 cm (5 ft 6 in)</p>
          </div>
          <div className=" flex justify-between items-center border-y py-2">
            <p className=" font-semibold">Bloodtype</p>
            <p className="text-gray-400">A</p>
          </div>
          <div className=" flex justify-between items-center border-y py-2">
            <p className=" font-semibold">Organ Donor</p>
            <p className="text-gray-400">No</p>
          </div>
          <div className=" flex justify-between items-center border-t py-2">
            <p className=" font-semibold">Allergies</p>
            <p className="text-gray-400">No</p>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
