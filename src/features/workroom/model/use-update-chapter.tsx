import { useWorkroom } from "@/features/workroom";
import { useState } from "react";
import { AxiosError } from "axios";
import { UpdateChapterRequest } from "@/shared/api/chapters-generated";

export function useUpdateChapter() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const storeUpdateChapter = useWorkroom((s) => s.updateChapter);


  const updateChapter = async (
    data: UpdateChapterRequest,
    onUpdate: () => void
  ) => {

    try {
      setIsLoading(true);
      await storeUpdateChapter(data);
      onUpdate();
    } catch
      (e: AxiosError<Error> | any)
      {
        setError(e.message);
      }
    finally
      {
        setIsLoading(false);
      }


    }
    ;

    return {
      isLoading,
      error,
      updateChapter
    };
  };
