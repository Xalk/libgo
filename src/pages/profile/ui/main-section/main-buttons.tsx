import { Button } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";

export function MainButtons() {
  return (
    <div className="mx-auto max-w-5xl flex justify-end gap-4 mt-10">
      <Button pill>
        <FaRegHeart className="mr-2 h-4 w-4" />
        12
      </Button>
      <Button pill color="gray">
        EDIT PROFILE
      </Button>
    </div>
  );
}
