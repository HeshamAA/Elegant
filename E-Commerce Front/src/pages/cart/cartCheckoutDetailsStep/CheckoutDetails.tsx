import InputField from "../../../components/forms/input/InputField";
import styles from "../cartPage/cartPage.module.css";
const { submitButton } = styles;

type Props = {
  formStepBackward: () => void;
  formStepForward: () => void;
};
function CheckoutDetails({ formStepBackward, formStepForward }: Props) {
  const formInputs = [
    "First Name",
    "Last Name",
    "Phone Number",
    "Email",
    "Address",
    "Country",
    "State",
    "City",
    "Postal Code",
    "Payment Method",
    "Card Number",
    "CVC",
    "Expiration Date",
  ];
  return (
    <form
      className="flexMiddleScreen"
      style={{ width: "100%", flexDirection: "column" }}
    >
      {formInputs.map((input) => (
        <InputField
          key={input}
          label={input}
          inputTitle={input}
          placeholder={input}
        ></InputField>
      ))}
      <div className="flex" style={{ gap: "10px" }}>
        <button
          style={{ marginTop: "20px",padding:"10px 20px", fontSize: "20px" }}
          className={submitButton}
          onClick={formStepBackward}
        >
          Back
        </button>
        <button
          style={{marginTop: "20px",padding:"10px 20px", fontSize: "20px" }}
          className={submitButton}
          onClick={formStepForward}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default CheckoutDetails;
