import { useQuery } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
import { IPool } from "store/types";
import useIsMounted from "react-is-mounted-hook";
import axios from "axios";
import { ERC20Service } from "services/erc20";
import { useConnectedWeb3Context } from "contexts";

interface IPoolsData {
  loading: boolean;
  pools: IPool[];
}

export const usePools = (query: any): IPoolsData => {
  const [state, setState] = useState<IPoolsData>({
    loading: false,
    pools: [],
  });

  const isMounted = useIsMounted();

  const { data, error, loading } = useQuery(query);

  if (loading && !state.loading && isMounted) {
    setState((prev) => ({ ...prev, loading: true }));
  }

  if (error && state.loading && isMounted) {
    setState((prev) => ({ ...prev, loading: false }));
  }

  const initPools = useMemo(() => (data && data.pools) || [], [data]);

  const { account, library: provider } = useConnectedWeb3Context();

  useEffect(() => {
    async function getMeta() {
      const ps: IPool[] = initPools;

      try {
        const metaDatas = await Promise.all(
          ps.map((pool: IPool) => {
            return axios
              .get(pool.meta || "")
              .then((response) => response.data)
              .catch(() => {
                return {};
              });
          })
        );

        const tokenDatas = await Promise.all(
          ps.map((pool: IPool) => {
            const erc20 = new ERC20Service(provider, account, pool.token || "");
            return erc20.getProfileSummary();
          })
        );

        if (isMounted()) {
          setState((prev) => ({
            ...prev,
            loading: false,
            pools: ps.map((pool: IPool, idx: number) => ({
              ...pool,
              metaData: metaDatas[idx],
              tokenData: tokenDatas[idx],
            })),
          }));
        }
      } catch (err) {
        console.error(err);
        if (isMounted()) {
          setState((prev) => ({
            ...prev,
            loading: false,
            pools: ps,
          }));
        }
      }
    }
    getMeta();
  }, [initPools, provider, account, isMounted]);

  return { ...state };
};
