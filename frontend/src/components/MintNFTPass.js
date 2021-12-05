import React from "react";

export function MintNFTPass({ mintNFTPass }) {
  return (
    <div>
    <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-red-600 text-left tracking-wide leading-tight pl-3">
      You don't have <br/> a NFT pass yet. <br/> Please mint <br/> to access our service.</div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          mintNFTPass();
        }}
      >
        
        <div className="form-group pt-6">
          <input className="w-full font-bold hover:text-red-600 rounded-2xl bg-white border-1 border-gray-200 p-3 text-sm hover:shadow-md shadow-xl" type="submit" value="Mint your NFT pass" />
        </div>
      </form>
    </div>
  );
}
