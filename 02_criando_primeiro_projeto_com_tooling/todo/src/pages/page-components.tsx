import { Text } from "../components/text";

import CheckIcon from "../assets/icons/check.svg?react";
import ClipboardIcon from "../assets/icons/clipboard.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";

import { Icon } from "../components/icon";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { ButtonIcon } from "../components/button-icon";
import { InputText } from "../components/input-text";
import { InputCheckbox } from "../components/input-checkbox";
import { Card } from "../components/card";
import { Container } from "../components/container";
import { Skeleton } from "../components/skeleton";

export function PageComponents() {
  return (
    <Container className="grid gap-10 p-4">
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

      <div className="flex gap-1">
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
        <Badge loading>2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
        <Button icon={PlusIcon} handling>Criando</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} variant={"primary"} />
        <ButtonIcon icon={TrashIcon} variant={"secondary"} />
        <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
        <ButtonIcon icon={TrashIcon} loading />
        <ButtonIcon icon={TrashIcon} handling />
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckbox />
        <InputCheckbox loading />
      </div>

      <div>
        <Card size={"md"}>Olá mundo</Card>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="w-96 h-6" />
      </div>
    </Container>
  );
}
