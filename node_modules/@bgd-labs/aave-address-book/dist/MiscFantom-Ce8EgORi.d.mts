declare const PARASWAP_FEE_CLAIMER = "0x9abf798f5314BFd793A9E57A654BEd35af4A1D60";
declare const CHAIN_ID = 250;

declare const MiscFantom_CHAIN_ID: typeof CHAIN_ID;
declare const MiscFantom_PARASWAP_FEE_CLAIMER: typeof PARASWAP_FEE_CLAIMER;
declare namespace MiscFantom {
  export { MiscFantom_CHAIN_ID as CHAIN_ID, MiscFantom_PARASWAP_FEE_CLAIMER as PARASWAP_FEE_CLAIMER };
}

export { CHAIN_ID as C, MiscFantom as M, PARASWAP_FEE_CLAIMER as P };
