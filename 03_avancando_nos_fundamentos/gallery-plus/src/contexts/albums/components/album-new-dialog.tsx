import Button from '../../../components/button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '../../../components/dialog';
import { InputText } from '../../../components/input-text';
import Text from '../../../components/text';
import type { Photo } from '../../photos/models/photo';
import SelectCheckboxIllustration from '../../../assets/images/select-checkbox.svg?react';
import Skeleton from '../../../components/skeleton';
import { ImagePreview } from '../../../components/image-preview';
import { PhotoImageSelectable } from '../../photos/components/photo-image-selectable';

interface AlbumNewDialogProps {
  trigger: React.ReactNode;
}

export function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
  // TODO: Utilizar API quando estiver pronta
  const isLoadingPhotos = false;
  const photos: Photo[] = [
    {
      id: '1',
      title: 'Foto de uma praia paradisíaca',
      imageId:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      albums: [
        { id: '1', title: 'Viagens' },
        { id: '2', title: 'Natureza' },
        { id: '3', title: 'Países' },
      ],
    },
    {
      id: '2',
      title: 'Foto de uma praia paradisíaca',
      imageId:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      albums: [
        { id: '1', title: 'Viagens' },
        { id: '2', title: 'Natureza' },
        { id: '3', title: 'Países' },
      ],
    },
    {
      id: '3',
      title: 'Foto de uma praia paradisíaca',
      imageId:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      albums: [
        { id: '1', title: 'Viagens' },
        { id: '2', title: 'Natureza' },
        { id: '3', title: 'Países' },
      ],
    },
    {
      id: '4',
      title: 'Foto de uma praia paradisíaca',
      imageId:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      albums: [
        { id: '1', title: 'Viagens' },
        { id: '2', title: 'Natureza' },
        { id: '3', title: 'Países' },
      ],
    },
    {
      id: '5',
      title: 'Foto de uma praia paradisíaca',
      imageId:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      albums: [
        { id: '1', title: 'Viagens' },
        { id: '2', title: 'Natureza' },
        { id: '3', title: 'Países' },
      ],
    },
    {
      id: '6',
      title: 'Foto de uma praia paradisíaca',
      imageId:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      albums: [
        { id: '1', title: 'Viagens' },
        { id: '2', title: 'Natureza' },
        { id: '3', title: 'Países' },
      ],
    },
  ];

  function handleTogglePhoto(selected: boolean, photoId: string) {
    console.log(selected, photoId);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Criar álbum</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título" maxLength={255} />

          <div className="space-y-3">
            <Text as="div" variant="label-small">
              Fotos cadastradas
            </Text>

            {!isLoadingPhotos && photos.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                  <PhotoImageSelectable
                    key={photo.id}
                    src={`/images/${photo.imageId}`}
                    title={photo.title}
                    imageClassName="w-20 h-20"
                    onSelectImage={(selected) =>
                      handleTogglePhoto(selected, photo.id)
                    }
                  />
                ))}
              </div>
            )}

            {isLoadingPhotos && (
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton
                    key={`photo-loading-${index}`}
                    className="w-20 h-20 rounded-lg"
                  />
                ))}
              </div>
            )}

            {!isLoadingPhotos && photos.length == 0 && (
              <div className="w-full flex flex-col justify-center items-center gap-3">
                <SelectCheckboxIllustration />
                <Text variant="paragraph-medium" className="text-center">
                  Nenhuma foto disponível para seleção
                </Text>
              </div>
            )}
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>

          <Button variant="primary">Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
