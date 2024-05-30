
import { ComposeChildren, useEventCallback } from "@/shared/lib/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "@/entities/session";
import { ROUTES } from "@/shared/constants";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";

export const loadPrivateLoaderData = async () => {
  try {
    // const [users, tasks, boards] = await Promise.all([
      // api.getUsers(),
      // api.getTasks(),
      // api.getBoards(),
    // ]);
    return { };
  } catch {
    return {};
  }
};

export function PrivateLoader({
                                children,
                                data: defaultData,
                              }: {
  children?: React.ReactNode;
  data?: Awaited<ReturnType<typeof loadPrivateLoaderData>>;
}) {
  const [data, setData] = useState(defaultData);
  // const tasks = data?.tasks;
  // const boards = data?.boards;
  // const users = data?.users;

  const isData = false;

  const router = useRouter();
  const session = useSession((s) => s.currentSession);

  const [isLoading, setIsLoading] = useState(!isData);

  const routerPush = useEventCallback(router.push);
  useEffect(() => {
    if (!session) {
      routerPush(ROUTES.SIGN_IN);
      return;
    }

    if (isData) {
      return;
    }

    setIsLoading(true);
    loadPrivateLoaderData()
      .then(setData)
      .finally(() => {
        setIsLoading(false);
      });
  }, [session, routerPush, isData]);

  return (
    <>
      <UiPageSpinner isLoading={isLoading} />
      {isLoading ? null : (
        <ComposeChildren>
          {/*<UsersProvider value={{ users: users ?? [] }} />*/}
          {/*<BoardsProvider value={{ boards: boards ?? [] }} />*/}
          {/*<TasksProvider value={{ tasks: tasks ?? [] }} />*/}
          {children}
        </ComposeChildren>
      )}
    </>
  );
}
