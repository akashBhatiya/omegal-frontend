import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";

export default function MessegeMenu() {
  return (
    <div className="text-right">
      <Menu>
        <MenuButton>
          <div className="w-[42px]  relative h-[42px] rounded-full bg-[#eff1f2] flex justify-center items-center  hover:scale-90 ">
            <HiOutlineDotsVertical className=" text-[20px] rotate-[90deg]" />
          </div>
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 origin-top-right border-none -mt-7 shadow-lg  p-1 text-sm/6 focus:outline-none bg-white"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-[#595959] font-bold active:scale-95 active:text-blue">
                <IoCopyOutline className=" text-[25px] " />
                Copy
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
