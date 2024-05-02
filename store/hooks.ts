import {
	useDispatch,
	useSelector,
	type TypedUseSelectorHook,
} from 'react-redux';
import { type AppDispatch, RootState } from '../store/store';

type DispatchFunction = () => AppDispatch;

export const useTextDispatch: DispatchFunction = useDispatch;
export const useTextSelector: TypedUseSelectorHook<RootState> = useSelector;
