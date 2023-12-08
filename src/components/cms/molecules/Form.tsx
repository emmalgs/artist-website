import FormSection from "./FormSection";
import Button from "../atoms/Button";
import { FormProps } from "../../../types";

const Form: React.FC<FormProps> = ({ sections, buttonText, handleSubmit, values, popup = true }) => {
  const style = popup ? "form-popup" : "";
  return (
    <div className={`pt-2 overflow-scroll ${style}`}>
      <form onSubmit={(e) => handleSubmit(e)} className="bg-white shadow-md rounded px-4 pt-4 pb-4 mb-4">
        {sections.map((section, index) => {
          return (
            <FormSection
              key={index}
              type={section.type}
              text={section.text}
              name={section.name}
              value={values ? values[section.name] : ""}
              placeholder={section.placeholder}
              handleInputEvent={section.handleChange}
            />
          );
        })}
        <div className="flex items-center justify-between">
        <Button text={buttonText} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
