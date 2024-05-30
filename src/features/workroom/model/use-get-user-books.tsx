// import { Book, useBooks } from "@/entities/book";
// import { CreateBooksRequest, getApiBooksUserUserId } from "@/shared/api/books-generated";
// import { useSession } from "@/entities/session";
// import { useState } from "react";
// import { CURRENT_API_VERSION } from "@/shared/constants";
//
// export function useGetUserBooks() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [data, setData] = useState<Book[] | null>(null);
//
//   const userId = useSession( (s) => s.currentSession?.id);
//
//
//   const getUserBooks = async () => {
//     try {
//       setIsLoading(true);
//       const userBooks = ;
//       setData(userBooks)
//
//     }catch (e) {
//       console.log(e);
//     }
//
//   };
//
//   return { createBook };
// }
