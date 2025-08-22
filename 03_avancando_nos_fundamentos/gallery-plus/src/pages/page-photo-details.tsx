import Text from "../components/text";
import { useParams } from "react-router";

export function PagePhotoDetails() {
  const { id } = useParams();

  return (
    <>
      <Text variant="heading-large">Detalhes da foto: {id}</Text>
    </>
  )
}