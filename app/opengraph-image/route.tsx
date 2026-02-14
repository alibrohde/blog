export const revalidate = 300;

import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

const fontsDir = join(process.cwd(), "fonts");

const geistSans = readFileSync(
  join(fontsDir, "geist-regular.ttf")
);

const geistSansMedium = readFileSync(
  join(fontsDir, "geist-medium.ttf")
);

export async function GET() {
  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full bg-white flex-col items-center justify-center"
        style={font("Geist")}
      >
        <div tw="flex flex-col items-center justify-center">
          <div tw="text-[72px] mb-4" style={font("Geist Medium")}>
            Ali Rohde
          </div>
          <div tw="text-[32px] text-gray-600">
            Managing Partner at Outset Capital
          </div>
          <div tw="text-[24px] text-gray-500 mt-8">
            alirohde.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: geistSans,
          weight: 400,
        },
        {
          name: "Geist Medium",
          data: geistSansMedium,
          weight: 500,
        },
      ],
    }
  );
}

// lil helper for more succinct styles
function font(fontFamily: string) {
  return { fontFamily };
}
