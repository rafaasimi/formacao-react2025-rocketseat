import { Text } from "./components/text";

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text as="p" className="text-pink-dark">
        Olá mundo!
      </Text>
      <Text as="p" variant={"body-sm-bold"} className="text-pink-dark">
        Olá mundo!
      </Text>
      <Text as="p" variant={"body-md"} className="text-pink-dark">
        Olá mundo!
      </Text>
      <Text as="p" variant={"body-md-bold"} className="text-pink-dark">
        Olá mundo!
      </Text>
    </div>
  );
}
