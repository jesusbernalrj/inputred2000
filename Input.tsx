

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  InputClassName?: string;
}

const Input = (props:InputProps ) => {
    const { InputClassName, ...rest } = props;
  return (
    <input 
    className="form-control w-full"
    {...rest}
    />
  )
}

export default Input