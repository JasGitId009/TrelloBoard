import dotenv from "dotenv";
dotenv.config();

export const api_key=process.env.Api_key;
export const token=process.env.Token_id;
export const baseurl=process.env.Base_url;

export const TIMEOUTS = {
    THREE_SECONDS: 3000,
    FIVE_SECONDS: 5000,
    TEN_SECONDS: 10000,
    FIFTEEN_SECONDS: 15000,
    THIRTY_SECONDS: 30000,
  };

  export const VIEWPORTS = [
    { type: "desktop", width: 1920, height: 1040 },
  ];

