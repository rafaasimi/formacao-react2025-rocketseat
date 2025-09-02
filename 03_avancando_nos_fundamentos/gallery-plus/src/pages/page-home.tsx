import Container from "../components/container";
import { PhotoWidget } from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";

export function PageHome() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidget
          photo={{
            id: '1',
            title: 'Foto de uma praia paradisíaca',
            imageId: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            albums: [
              { id: '1', title: 'Viagens' },
              { id: '2', title: 'Natureza' },
              { id: '3', title: 'Países' },
            ]
          }}
        />

        <PhotoWidget
          photo={{
            id: '2',
            title: 'Foto de uma praia paradisíaca',
            imageId: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            albums: [
              { id: '1', title: 'Viagens' },
              { id: '2', title: 'Natureza' },
              { id: '3', title: 'Países' },
            ]
          }}
        />

        <PhotoWidget
          photo={{
            id: '3',
            title: 'Foto de uma praia paradisíaca',
            imageId: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            albums: [
              { id: '1', title: 'Viagens' },
              { id: '2', title: 'Natureza' },
              { id: '3', title: 'Países' },
            ]
          }}
        />

        <PhotoWidget
          photo={{} as Photo}
          loading
        />
      </div>
    </Container>
  )
}