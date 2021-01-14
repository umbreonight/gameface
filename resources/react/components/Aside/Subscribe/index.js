import React from "react";
import FloatingLabelInput from "../../Elements/FloatingLabelInput";

const Subscribe = () => {
  return (
    <section name="subscribe">
      <h4 className="subheading text-uppercase">
        Subscribe now to get the latest news about our games.
      </h4>
      <FloatingLabelInput placeholder="Email address" type="email" />
      <div className="flex justify-content-end">
        <button className="button-accent" type="submit">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
