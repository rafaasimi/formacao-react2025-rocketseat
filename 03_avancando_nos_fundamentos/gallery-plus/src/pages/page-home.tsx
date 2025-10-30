import Container from '../components/container';
import { AlbumsFilter } from '../contexts/albums/components/albums-filter';
import { useAlbums } from '../contexts/albums/hooks/use-albums';
import { PhotosList } from '../contexts/photos/components/photos-list';

export function PageHome() {
  const { albums, isLoadingAlbums } = useAlbums();

  return (
    <Container>
      <AlbumsFilter
        albums={albums}
        loading={isLoadingAlbums}
        className="mb-9"
      />
      <PhotosList
        photos={[
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
        ]}
      />
    </Container>
  );
}
