import { usersApi } from "@/shared/api";
import { useGetConfirmation } from "@/shared/lib/confirmation";
import { bookCheckout } from "../api";

export function useReadBook(id: string) {
  const getConfirmation = useGetConfirmation();
  // const removeColumn = useBoardStore().useSelector((s) => s.removeColumn);

  const handleRead = async () => {
    const confirmatin = await getConfirmation({
      title: "Read book",
      description: `Are you sure you want to read this book ${id}?`,
    });

    if (!confirmatin) {
      console.log("cancelled");
      return;
    }

    const result = await bookCheckout();
    console.log(result);

    // removeColumn(col.id);
  };

  return { handleRead };
}
