import React from "react";
import "./RegisterForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { register as handleRegister } from "../../store/actions/auth";
import * as Yup from "yup";

const RegisterForm = () => {

    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        organisation: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState, reset } = useForm(formOptions);

    const { errors } = formState;

    const onSubmit = (data) => {
        dispatch(handleRegister(data.username, data.organisation, data.password))
    };
    return (
        <div className="row d-flex justify-content-center py-5">
            <form
                className="application-form col-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div
                    className="application-form__title text-uppercase w-100 text-center"
                >
                    Registration form
                </div>
                <div className="form-row">
                    <div className="form-group col input-wrapper my-3">
                        <label>Username</label>
                        <input
                            placeholder="Username"
                            name="username"
                            type="text"
                            {...register("username")}
                            className={`form-control ${errors.username ? "is-invalid" : ""}`}
                            autoComplete="on"
                        />
                        <div className="invalid-feedback validation-error">
                            {errors.username?.message}
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col input-wrapper my-3">
                        <label>Organisation</label>
                        <input
                            placeholder="Organisation"
                            name="organisation"
                            type="text"
                            {...register("organisation")}
                            className={`form-control ${errors.organisation ? "is-invalid" : ""}`}
                            autoComplete="on"
                        />
                        <div className="invalid-feedback validation-error">
                            {errors.organisation?.message}
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col input-wrapper my-3">
                        <label>Password</label>
                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            {...register("password")}
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            autoComplete="off"
                        />
                        <div className="invalid-feedback validation-error">
                            {errors.password?.message}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className="py-2 text-white text-uppercase border-0 w-100 bg-dark cursor-pointer"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
