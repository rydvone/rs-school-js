export const StorageItems: IStorageItem[] = [];

export const StorageItem: IStorageItem = {
  name: '',
  color: '#c0c0c0',
  id: 9999,
};

export interface IStorageItem {
  name: string;
  color: string;
  id: number;
}
