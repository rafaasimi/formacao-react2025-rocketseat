import Container from '../components/container';
import { useParams } from 'react-router';
import Text from '../components/text';
import Skeleton from '../components/skeleton';
import { PhotosNavigator } from '../contexts/photos/components/photos-navigator';
import { ImagePreview } from '../components/image-preview';
import Button from '../components/button';
import { AlbumsListSelectable } from '../contexts/albums/components/albums-list-selectable';

export function PagePhotoDetails() {
  const { id } = useParams();

  // Apenas para fazer o teste do mock
  const isLoadingPhoto = false;
  const photo = {
    id: '1',
    title: 'Foto de uma praia paradisíaca',
    imageId:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    albums: [
      { id: '1', title: 'Viagens' },
      { id: '2', title: 'Natureza' },
      { id: '3', title: 'Países' },
    ],
  };

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large">
            {photo.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator loading={isLoadingPhoto} />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}

          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Álbuns
          </Text>
          <AlbumsListSelectable
            photo={photo}
            albums={[
              { id: '1', title: 'Viagens' },
              { id: '2', title: 'Natureza' },
              { id: '3', title: 'Países' },
            ]}
            loading={isLoadingPhoto}
          />
        </div>
      </div>
    </Container>
  );
}
