import { Text } from "./components/text";

import CheckIcon from "./assets/icons/check.svg?react";
import ClipboardIcon from "./assets/icons/clipboard.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import XIcon from "./assets/icons/x.svg?react";

import { Icon } from "./components/icon";

export default function App() {
  return (
    <>
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

      <div className="flex gap-1">
        <Icon className="fill-green-dark" svg={CheckIcon} />
        <Icon className="fill-green-dark" svg={ClipboardIcon} />
        <Icon className="fill-green-dark" svg={PencilIcon} />
        <Icon className="fill-green-dark" svg={PlusIcon} />
        <Icon className="fill-green-dark" svg={SpinnerIcon} animate />
        <Icon className="fill-green-dark" svg={TrashIcon} />
        <Icon className="fill-green-dark" svg={XIcon} />
      </div>
    </>
  );
}
