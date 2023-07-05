import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef(
  (
    { label, type, id, error, placeholder, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <fieldset>
        {label ? <label>{label}</label> : null}
        <input
          type={type}
          id={id}
          ref={ref}
          placeholder={placeholder}
          {...rest}
        />
        {error ? <p className="input__p--error">{error}</p> : null}
      </fieldset>
    );
  }
);
