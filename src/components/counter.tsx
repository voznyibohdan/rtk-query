import React, {useState} from 'react';
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {decrement, increment, incrementByAmount} from "../store/reducers/counterSlice.ts";
import {useAppSelector} from "../hooks/useAppSelector.ts";

const Counter:React.FC = () => {
	const dispatch = useAppDispatch();
	const {value} = useAppSelector((state) => state.counter);

	const [amount, setAmount] = useState<number>(0);

	return (
		<div>
			<button onClick={() => dispatch(increment())}>+</button>
			<span>{value}</span>
			<button onClick={() => dispatch(decrement())}>-</button>
			<input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
			<button onClick={() => dispatch(incrementByAmount(amount))}>increment by amount</button>
		</div>
	);
};

export default Counter;