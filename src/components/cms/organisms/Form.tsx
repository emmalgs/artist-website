import FormSection from "../molecules/FormSection";
import Button from "../atoms/Button";
import { FormProps } from "../../../types";

const Form: React.FC<FormProps> = ({ sections, buttonText, handleSubmit }) => {
  return (
    <div className="w-full max-w-xs m-auto pt-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {sections.map((section) => {
          return (
            <FormSection
              type={section.type}
              text={section.text}
              name={section.name}
              placeholder={section.placeholder}
            />
          );
        })}
        <div className="flex items-center justify-between">
        <Button text={buttonText} type="submit" action="" />
        </div>
      </form>
    </div>
  );
};

export default Form;
