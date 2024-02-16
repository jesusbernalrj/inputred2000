
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  buttonClassName?: string;
}

const Button = (props: ButtonProps) => {
  const { buttonClassName, ...rest } = props;

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm 
      font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
      focus-visible:ring-ring focus-visible:ring-offset-2 
      hover:bg-primary/90 h-10 px-2 py-2 ${buttonClassName}`}
      {...rest} 
    >
      {props.children}
    </button>
  );
};

export default Button;
