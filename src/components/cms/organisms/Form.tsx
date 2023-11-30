import FormSection from "../molecules/FormSection";
import Button from "../atoms/Button";
import { FormProps } from "../../../types";

const Form: React.FC<FormProps> = ({ sections, buttonText, handleSubmit }) => {
  return (
    <div className="w-full max-w-xs m-auto pt-2">
      <form onSubmit={(e) => handleSubmit(e)} className="bg-white shadow-md rounded px-4 pt-4 pb-4 mb-4">
        {sections.map((section, index) => {
          return (
            <FormSection
              key={index}
              type={section.type}
              text={section.text}
              name={section.name}
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
