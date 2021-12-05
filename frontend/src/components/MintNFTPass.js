import React from "react";

export function MintNFTPass({ mintNFTPass }) {
  return (
    <div>
      <h4>Mint NFTPass</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          console.log(event);

          if (event) {
            mintNFTPass();
          }
        }}
      >
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Mint" />
        </div>
      </form>
    </div>
  );
}
