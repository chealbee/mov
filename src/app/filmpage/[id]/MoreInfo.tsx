import Casts from "@/components/Casts";
import Reviews from "@/components/Reviews/Reviews";

const MoreInfo = ({ id }: { id: string }) => {
  return (
    <>
      <Casts id={id} />
      <Reviews id={id} />
    </>
  );
};

export default MoreInfo;
