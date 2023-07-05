import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = forwardRef(
  (
    { label, id, placeholder, ...rest }: ISelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <fieldset>
        {label ? <label>{label}</label> : null}
        <select id={id} ref={ref} placeholder={placeholder} {...rest} />
      </fieldset>
    );
  }
);
