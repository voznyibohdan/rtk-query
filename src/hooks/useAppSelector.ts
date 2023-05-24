import { useSelector } from 'react-redux';
import type { RootState } from '../store/store.ts';
import type { TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;