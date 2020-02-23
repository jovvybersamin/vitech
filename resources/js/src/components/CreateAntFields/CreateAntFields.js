import React from "react";
import { DatePicker, Form, Input, TimePicker, Select } from "antd";
import { useFormikContext } from "formik";

const FormItem = Form.Item;
const { Option } = Select;

const CreateAntField = AntComponent => ({
    field,
    form,
    hasFeedback,
    label,
    selectOptions,
    submitCount,
    type,
    isFocus,
    handleChange,
    isKeyValuePair = false,
    ...props
}) => {

    const {
        values,
        setFieldValue
    } = useFormikContext();

    const touched = form.touched[field.name];
    const submitted = submitCount > 0;
    const hasError = form.errors[field.name];
    const submittedError = hasError && submitted;
    const touchedError = hasError && touched;
    const onInputChange = ({ target: { value } }) =>
        form.setFieldValue(field.name, value);
    const onChange = value => {
        form.setFieldValue(field.name, value);
        if (typeof handleChange === 'function') {
            handleChange(setFieldValue, value, touched);
        }
    };

    const onBlur = () => form.setFieldTouched(field.name, true);
    const fieldRef = React.useRef(null);

    // adding the password type.
    props = { ...props, ...(type === 'password' ? { type } : {}) };



    React.useEffect(() => {
        if (isFocus) {
            fieldRef.current.focus();
        }
        console.log(values);
    }, [isFocus])


    const buildOptions = () => {
        if (isKeyValuePair) {
            return selectOptions.map(pair => <Option key={pair.id} value={pair.id}>{pair.label}</Option>);
        } else {
            return selectOptions.map(name => <Option key={name} value={pair.id}>{name}</Option>);
        }
    }


    return (
        <div className="field-container">
            <FormItem
                label={label}
                hasFeedback={
                    (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
                }
                help={submittedError || touchedError ? hasError : false}
                validateStatus={submittedError || touchedError ? "error" : "success"}
            >
                <AntComponent
                    {...field}
                    {...props}
                    onBlur={onBlur}
                    onChange={type ? onInputChange : onChange}
                    ref={fieldRef}
                >
                    {selectOptions && buildOptions()}
                </AntComponent>
            </FormItem>
        </div>
    );
};



// source: https://codesandbox.io/s/4x47oznvvx
// or try this: https://github.com/jannikbuschke/formik-antd

export const AntSelect = CreateAntField(Select);
export const AntDatePicker = CreateAntField(DatePicker);
export const AntInput = CreateAntField(Input);
export const AntPassword = CreateAntField(Input);
export const AntTimePicker = CreateAntField(TimePicker);
