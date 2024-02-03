import React from "react";
import pdf from "../assests/webpage.pdf";
import { Box } from "@chakra-ui/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function documentlist() {
  return (
    <>
      <Box className="document" textAlign={"Center"} mt={5} w={"100%"}>
        <h1>Documents</h1>

        {docs.map((d) => (
          <div class="text">
            <a href={d.file} download={d.file}>
              <HiOutlineArrowNarrowRight className="arrow" />
              <Box display={"inline"}>{d.name}</Box>
            </a>
          </div>
        ))}
      </Box>
    </>
  );
}

const docs = [
  {
    name: `Minutes of the 1st meeting on Vibrant
    gram Sabhas dated 23032021(pdf)`,
    file: pdf,
  },
  {
    name: `Minutes of the 1st meeting on Vibrant
    gram Sabhas dated 23032021(pdf)`,
    file: pdf,
  },
  {
    name: `Minutes of the 1st meeting on Vibrant
    gram Sabhas dated 23032021(pdf)`,
    file: pdf,
  },
  {
    name: `Minutes of the 1st meeting on Vibrant
    gram Sabhas dated 23032021(pdf)`,
    file: pdf,
  },

  {
    name: `Minutes of the 1st meeting on Vibrant
    gram Sabhas dated 23032021(pdf)`,
    file: pdf,
  },
  {
    name: `Minutes of the 1st meeting on Vibrant
    gram Sabhas dated 23032021(pdf)`,
    file: pdf,
  },
  {
    name: `Minutes of the 1st meeting on Vibrant
    gram Sabhas dated 23032021(pdf)`,
    file: pdf,
  },
];
