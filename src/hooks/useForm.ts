import { useState } from 'react'

const useInput = (
	validateValue: (arg: string) => boolean | RegExpMatchArray | null
) => {
	const [enteredValue, setEnteredValue] = useState('')
	const [isTouched, setIsTouched] = useState(false)

	const valueIsValid = validateValue(enteredValue)
	const hasError = !valueIsValid && isTouched

	const valueChangeHandler = (event: any) => {
		setEnteredValue(event.target.value)
	}

	const inputBlurHandler = (event: any) => {
		setIsTouched(true)
	}

	const reset = () => {
		setEnteredValue('')
		setIsTouched(false)
	}

	return {
		value: enteredValue,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		isValid: valueIsValid,
		reset,
	}
}

export default useInput
