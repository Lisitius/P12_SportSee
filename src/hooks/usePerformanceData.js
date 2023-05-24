import { useState, useEffect } from "react";
import { getUserPerformance } from "../service/apiPerformance";
import { useParams } from "react-router-dom";

const usePerformanceData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const userPerformance = await getUserPerformance(id);

      setData(userPerformance);
    };

    fetchData();
  }, [id]);

  return data;
};

export default usePerformanceData;
