import { useForm } from "react-hook-form";
import styled from "styled-components";

const ContactForm = () => {

    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = (data) => {
        console.log(errors);
    };

    return (
        <UserMessage onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", {
                required: "Full name is required",
                minLength: 2,
                })} type="text" placeholder="Enter your full name"></input>
                {errors.name && (
                    <div style={{color: "red"}}>{errors.name.message}</div>
                )}
            <input {...register("email", {
                required: "Email is required",
                validate: (value) => value.includes("@"),
            })} type="email" placeholder="Enter your email"></input>
            {errors.email && (
                    <div style={{color: "red"}}>{errors.email.message}</div>
                )}
            <textarea {...register("message", {
                required: true,
            })}className="message" placeholder="Type your comments and/or questions"></textarea>
            {console.log(errors.email)}
            <button type="submit" className="btn">SEND</button>
        </UserMessage>
    )
};

export default ContactForm;

const UserMessage = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    input {
        min-width: 60vw;
        height: 2rem;
        font-size: 1.5rem;
    }
    .btn {
        padding: 1.3rem 3rem;
        border: none;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        background-image: linear-gradient(45deg, navy, blue);
        background-size: 300%;
        background-position: left;
        transition: all 0.6s;
    }
    .btn:hover,
    .btn:focus {
        cursor: pointer;
        background-position: right;
        transform: scale(1.1);

    }
    .message {
        height: 9rem;
        resize: none;
        min-width: 60vw;
        font-size:1.5rem;
    }
`