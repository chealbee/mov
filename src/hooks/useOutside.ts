import { useEffect, useRef, useState } from "react";

function useOutside<T extends HTMLElement = HTMLElement>(defVall: boolean) {
  const [isShow, setIsShow] = useState(defVall);
  const ref = useRef<T>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref?.current?.contains(event.target as Node)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isShow, setIsShow };
}
export default useOutside;
