import { useEffect, useState, useCallback } from "react";
import { getUsers } from "../api/users";

function useUsers(page, limit = 9) {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = useCallback(async () => {

    setLoading(true);
    setError(null);

    try {
      const { data } = await getUsers(page, limit);
      setUsers(data.data.data);
      setTotalPages(data.data.totalPages);

    } catch (error) {
      setError(error.message || "Something went wrong");

    } finally {
      setLoading(false);
    }

  }, [page, limit]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, error, totalPages, loading, refetch: fetchUsers};
}
export default useUsers;