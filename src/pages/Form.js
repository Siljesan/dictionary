import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstname", { required: true })}
          placeholder="Firstname..."
        />
        {errors.firstname && <span>This field is required</span>}
        <button>Send</button>
      </form>
    </>
  );
}

export default Form;
