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
          <div tw="text-[64px] mb-2" style={font("Geist Medium")}>
            10 Minutes or Less
          </div>
          <div tw="text-[32px] text-gray-600 mb-6">
            with Ali Rohde
          </div>
          <div tw="text-[22px] text-gray-400">
            Short-form interviews with startup CEOs and tech leaders
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

function font(fontFamily: string) {
  return { fontFamily };
}
