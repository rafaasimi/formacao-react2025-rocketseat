import { InputText } from './input-text';
import SearchIcon from '../assets/icons/search.svg?react';
import React from 'react';
import { debounce } from '../helpers/utils';
import { usePhotos } from '../contexts/photos/hooks/use-photos';

export function PhotosSearch() {
  const [inputValue, setInputValue] = React.useState('');
  const { filters } = usePhotos();

  const debouncedSetValue = React.useCallback(
    debounce((value: string) => {
      filters.setQ(value);
    }, 300),
    [filters.setQ]
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
