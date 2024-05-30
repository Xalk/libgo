import { useSession } from "@/entities/session";
import { useWorkroom } from "@/features/workroom";
import { useState } from "react";
import { AxiosError } from "axios";

export function useUpdateBook() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const userId = useSession((s) => s.currentSession?.id);

  const storeUpdateBook = useWorkroom((s) => s.updateBook);


  const updateBook = async (data: {
    id: number;
    name: string;
    description: string;
    price: number;
    coAuthors: string[];
    genre: string;
  }, onUpdate: () => void) => {
    // add try catch
    try {
      setIsLoading(true);
      await storeUpdateBook({ ...data, userId: Number(userId) }, Number(userId));
      onUpdate();
    } catch (e: AxiosError<Error> | any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }


  };

  return {
    isLoading,
    error,
    updateBook
  };
}
