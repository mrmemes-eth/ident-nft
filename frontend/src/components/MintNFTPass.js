import React from "react";

export function MintNFTPass({ mintNFTPass }) {
  return (
    <div>
      <h4>Mint NFTPass</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          mintNFTPass();
        }}
      >
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Mint" />
        </div>
      </form>
    </div>
  );
}
