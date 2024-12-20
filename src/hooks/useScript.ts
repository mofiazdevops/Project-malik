import { useEffect } from "react";

interface IProps {
  url: string;
  id: string;
}

const useScript = (props: IProps) => {
  const { id, url } = props;
  useEffect(() => {
    if (document.getElementById(id)) return;

    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    script.id = id;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, id]);
};

export default useScript;
