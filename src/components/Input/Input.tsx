import style from './Input.module.css'

interface InputProps {
    type: string;
    id: string;
    name: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ type, id, name, label, onChange, ...rest }: InputProps) => {
    return (
        <>
            <label className={style.styled_label} htmlFor={id}>{label}</label>
            <input
                className={style.styled_input}
                type={type}
                id={id}
                name={name}
                onChange={(e) => onChange(e)}
                {...rest}
            />
        </>
    );
};